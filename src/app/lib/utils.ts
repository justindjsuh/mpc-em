interface ConvertedDates {
  startDate: string;
  endDate: string;
}

export const convertDatesIntoReadable = (eventStartDate: string, eventEndDate?: string): ConvertedDates => {
  const startDate = new Date(`${eventStartDate}T00:00`);
  const formattedStartDate = startDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const endDate = new Date(`${eventEndDate}T00:00`);
  const formattedEndDate = endDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return { startDate: formattedStartDate, endDate: formattedEndDate };
};

export const convertSingleDate = (date: string | Date): string => {
  const startDate = new Date(date);
  return startDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
