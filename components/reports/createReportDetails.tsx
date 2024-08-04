import { useState, useEffect } from 'react';

const ReportDetails = (props: any) => {
  const { data, setData } = props;

  const [reportDetails, setReportDetails] = useState<any>({
    name: '',
    age: '',
    gender: 'male',
    scd: '',
    tob: ''
  });

  const handleReportDetailsChange = (event: any) => {
    const { name, value } = event.target;
    setReportDetails({
      ...reportDetails,
      [name]: value
    });
  };

  useEffect(() => {
    const isDataEmpty = () => {
      for (const key in reportDetails) {
        if (reportDetails[key].trim() === '') {
          return true;
        }
      }
      return false;
    };
    if (!isDataEmpty()) {
      setData({
        ...data,
        report: reportDetails
      });
    }
  }, [reportDetails]);

  return (
    <form className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="name"
            type="text"
            placeholder="John Doe"
            value={reportDetails.house}
            onChange={handleReportDetailsChange}
            autoComplete="off"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="age"
            type="text"
            placeholder="age"
            value={reportDetails.age}
            onChange={handleReportDetailsChange}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="gender"
            value={reportDetails.gender}
            onChange={handleReportDetailsChange}
            defaultValue={'male'}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="scd"
          >
            Sample Collection Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="scd"
            type="date"
            value={reportDetails.scd}
            onChange={handleReportDetailsChange}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tob"
          >
            Type of Biomaterial
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="tob"
            type="text"
            placeholder="Type of Biomaterial"
            value={reportDetails.tob}
            onChange={handleReportDetailsChange}
            autoComplete="off"
          />
        </div>
      </div>
    </form>
  );
};

export default ReportDetails;
