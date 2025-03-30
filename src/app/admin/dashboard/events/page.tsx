'use client';
import type { EventLinks, EventsApiResponse } from '@/app/lib/definitions';
import type { PopconfirmProps, TableColumnsType } from 'antd';
import type { NotificationType } from '../../login/page';
import { convertDatesIntoReadable } from '@/app/lib/utils';
import { DeleteFilled, EditFilled, LeftOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Empty, Form, Input, Modal, notification, Popconfirm, Skeleton, Space, Steps, Table, Tag, Upload } from 'antd';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { uploadImg } from '../../login/actions';
import { UserContext } from '../UserContext';
import styles from './Events.module.css';

const startDateColumnRenderer = (date: string) => {
  const { startDate } = convertDatesIntoReadable(date, date);
  return startDate;
};

const endDateColumnRenderer = (date: string) => {
  const { startDate } = convertDatesIntoReadable(date, date);
  return startDate;
};

const AdminEvents: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<EventsApiResponse | null>(null);
  const [savedEvent, setSavedEvent] = useState<{ name: string; start_date: string; end_date: string; description: string }>({
    name: '',
    start_date: '',
    end_date: '',
    description: '',
  });
  const [linksList, setLinksList] = useState<EventLinks[]>([]);
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [addNewEvent, setAddNewEvent] = useState(false);
  const [linkLabelState, setLinkLabelState] = useState('');
  const [linkState, setLinkState] = useState('');
  const [step, setStep] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();

  const openNotificationWithIcon = (type: NotificationType, message: string, description?: string) => {
    api[type]({ message, description });
  };
  const { loading, events, setEvents } = useContext(UserContext);

  useEffect(() => {
    setLinksList(activeEvent?.links || []);
  }, [activeEvent]);

  const confirm = async (id: number) => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (response.ok) {
        openNotificationWithIcon('success', 'Event Deleted');
        const res = await fetch('/api/events');
        const data: EventsApiResponse[] = await res.json();
        setEvents(data);
      } else {
        openNotificationWithIcon('error', 'Action Failed', `Something went wrong. Please try again or consult an admin with the  following error: ${data.error}`);
      }
    } catch (error) {
      openNotificationWithIcon('error', 'Action Failed', `Something went wrong. Please try again or consult an admin with the  following error: ${error}`);
    }
  };

  const cancel: PopconfirmProps['onCancel'] = () => {

  };

  const handleEditClick = (rowRecord: EventsApiResponse) => {
    setActiveEvent(rowRecord);
    setIsOpenModal(true);
    setLinksList(rowRecord.links || []);
  };

  const columns: TableColumnsType<EventsApiResponse> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      width: 80,
      render: startDateColumnRenderer,
      responsive: ['md'],
    },
    {
      title: 'End Date',
      dataIndex: 'end_date',
      key: 'end_date',
      width: 80,
      render: endDateColumnRenderer,
      responsive: ['md'],
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      width: 100,
      responsive: ['md'],
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: 80,
      render: (_, record) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<EditFilled />}
            onClick={() => {
              setAddNewEvent(false);
              handleEditClick(record);
            }}
          />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this event?"
            onConfirm={() => confirm(record.id)}
            onCancel={cancel}
            okText="Confirm"
            cancelText="Cancel"
          >
            <Button shape="circle" icon={<DeleteFilled />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if (activeEvent) {
      form.setFieldsValue({
        eventName: activeEvent.name,
        startDate: dayjs(activeEvent.start_date),
        endDate: dayjs(activeEvent.end_date),
        eventDescription: activeEvent.description,
      });
    }
  }, [activeEvent, form]);

  const handleCheckEventDelta = () => {
    const currentValues = form.getFieldsValue();

    if (step === 0) {
      return (
        currentValues.eventName !== activeEvent?.name
        || !dayjs(currentValues.startDate).isSame(dayjs(activeEvent?.start_date))
        || !dayjs(currentValues.endDate).isSame(dayjs(activeEvent?.end_date))
        || currentValues.eventDescription !== activeEvent?.description
        || currentValues.image);
    } else if (step === 1) {
      return (
        savedEvent.name !== activeEvent?.name
        || !dayjs(savedEvent.start_date).isSame(dayjs(activeEvent?.start_date))
        || !dayjs(savedEvent.end_date).isSame(dayjs(activeEvent?.end_date))
        || savedEvent.description !== activeEvent?.description);
    }
  };

  const onClose = () => {
    if (handleCheckEventDelta()) {
      setShowConfirm(true);
    } else {
      setIsOpenModal(false);
      setStep(0);
      setLinkLabelState('');
      setLinkState('');
      setLinksList([]);
    }
  };

  const onFinish = () => {

  };

  const onOk = async () => {
    const currentValues = form.getFieldsValue();

    if (step === 0) {
      if (currentValues.eventName && currentValues.startDate && currentValues.endDate && currentValues.eventDescription) {
        setStep(1);
        setSavedEvent({
          name: currentValues.eventName,
          start_date: currentValues.startDate,
          end_date: currentValues.endDate,
          description: currentValues.eventDescription,
        });
      } else {
        return;
      }
    }
    if (step === 1) {
      try {
        const fileObj = currentValues?.image?.file?.originFileObj;
        const filename = `${Date.now()}_${fileObj?.name}`;

        const { data, error } = await uploadImg(filename, fileObj);

        if (error && fileObj && filename) {
          openNotificationWithIcon('error', 'Action Failed', `Something went wrong. Please try again or consult an admin with the  following error: ${error}`);
        }

        const newRecord: Partial<EventsApiResponse> = {
          start_date: dayjs(savedEvent.start_date).format('YYYY-MM-DD'),
          end_date: dayjs(savedEvent.end_date).format('YYYY-MM-DD'),
          links: linksList,
          description: savedEvent.description,
          name: savedEvent.name,
          image_url: data?.publicUrl || 'https://mamstnqwxevezdeuhvyi.supabase.co/storage/v1/object/public/event-images//placeholder_img.png',
          id: activeEvent?.id,
        };

        const response = await fetch('/api/events', {
          method: addNewEvent ? 'POST' : 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newRecord),
        });

        const result = await response.json();

        if (!result.success) {
          openNotificationWithIcon('error', 'Action Failed', `Something went wrong. Please try again or consult an admin with the  following error: ${result.error}`);
        } else {
          setIsOpenModal(false);
          setStep(0);
          setLinkLabelState('');
          setLinkState('');
          setLinksList([]);
          const res = await fetch('/api/events');
          const data: EventsApiResponse[] = await res.json();
          setEvents(data);
        }
      } catch (err) {
        openNotificationWithIcon('error', 'Action Failed', `Something went wrong. Please try again or consult an admin with the  following error: ${err}`);
      }
    }
  };

  const handleConfirmation = () => {
    setIsOpenModal(false);
    setShowConfirm(false);
    setStep(0);
    form.resetFields();
    form.setFieldsValue({
      eventName: activeEvent?.name,
      startDate: dayjs(activeEvent?.start_date),
      endDate: dayjs(activeEvent?.end_date),
      description: activeEvent?.description,
    });
    setActiveEvent(null);
    setLinkLabelState('');
    setLinkState('');
    setLinksList([]);
  };

  const onConfirmationCancel = () => {
    setShowConfirm(false);
  };

  const addLink = () => {
    if (linkLabelState === '' && linkState === '') {
      return;
    }
    setLinksList(prev => [...prev, { label: linkLabelState, link: linkState }]);
    setLinkLabelState('');
    setLinkState('');
  };

  const handleClose = (linkLabel: string) => {
    setLinksList(prev => prev.filter(link => link.label !== linkLabel));
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {contextHolder}
      <div className={styles.eventHeader}>
        <h3>Events</h3>
        <Button
          icon={<PlusOutlined />}
          onClick={() => {
            form.resetFields();
            form.setFieldsValue({
              eventName: '',
              startDate: null,
              endDate: null,
              eventDescription: '',
            });
            setActiveEvent(null);
            setAddNewEvent(true);
            setIsOpenModal(true);
          }}
        >
          Add Event
        </Button>
      </div>
      <Table
        key="eventsTable"
        dataSource={events}
        columns={columns}
        tableLayout="fixed"
        locale={{
          emptyText: loading ? <Skeleton active /> : <Empty />,
        }}
        pagination={{ pageSize: 10 }}
      />
      <Modal
        title={addNewEvent ? 'Create New Event' : 'Edit Event'}
        open={isModalOpen}
        onCancel={onClose}
        maskClosable={false}
        onOk={onOk}
        okText={step === 0 ? 'Continue' : 'Save'}
      >
        <div className={styles.modalContainer}>
          <div style={{ padding: '1rem 0' }}>
            <Steps
              size="small"
              current={step}
              items={[
                {
                  title: 'Event Details',
                },
                {
                  title: 'Image & Links',
                },
              ]}
            />
          </div>
          <Form
            name="eventEdit"
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={addNewEvent
              ? {}
              : {
                  eventName: activeEvent?.name,
                  startDate: dayjs(activeEvent?.start_date),
                  endDate: dayjs(activeEvent?.end_date),
                  eventDescription: activeEvent?.description,
                }}
          >

            {step === 0 && (
              <>
                <Form.Item
                  name="eventName"
                  label="Event Name"
                  rules={[
                    { required: true, message: 'Please enter an event name' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="startDate"
                  label="Start Date"
                  rules={[
                    { required: true, message: 'Please enter a start date' },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  name="endDate"
                  label="End Date"
                  rules={[
                    { required: true, message: 'Please enter an end date' },
                  ]}
                >
                  <DatePicker />
                </Form.Item>

                <Form.Item
                  name="eventDescription"
                  label="Description"
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
              </>
            )}
            {step === 1 && (
              <>
                <Button
                  color="default"
                  variant="link"
                  onClick={() => setStep(0)}
                  icon={<LeftOutlined />}
                  iconPosition="start"
                  style={{ marginLeft: '-1rem', marginBottom: '1rem' }}
                >
                  Back
                </Button>
                <Form.Item
                  name="image"
                  label="Image Upload"
                >
                  <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>
                <div>
                  <div className={styles.linkInputs}>
                    <div className={styles.linkInput}>
                      <p>Link Label</p>
                      <Input onChange={e => setLinkLabelState(e.target.value)} value={linkLabelState} />
                    </div>
                    <div className={styles.linkInput}>
                      <p>Link</p>
                      <Input onChange={e => setLinkState(e.target.value)} value={linkState} />
                    </div>
                  </div>
                  <Button
                    icon={<PlusOutlined />}
                    style={{ marginTop: '1rem' }}
                    onClick={addLink}
                  >
                    Add
                  </Button>
                  {linksList.length > 0
                    ? (
                        <div className={styles.linksContainer} style={{ marginTop: '1rem' }}>
                          <p>Links</p>
                          {linksList.map((link, idx) => (
                            <Tag
                              // eslint-disable-next-line react/no-array-index-key
                              key={idx}
                              closable
                              color="blue"
                              onClose={() => handleClose(link.label)}
                            >
                              {link.label}
                            </Tag>
                          ))}
                        </div>
                      )
                    : null}
                </div>
              </>
            )}

          </Form>
        </div>
      </Modal>
      <Modal
        title="Confirm Action"
        open={showConfirm}
        okText="Confirm"
        onOk={handleConfirmation}
        onCancel={onConfirmationCancel}
        centered
      >
        Are you sure you want to cancel? This will discard your current changes.
      </Modal>
    </motion.div>
  );
};

export default AdminEvents;
