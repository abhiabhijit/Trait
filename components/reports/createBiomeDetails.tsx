import { useState, useEffect } from 'react';

const MicroBiomeDetails = (props: any) => {
  const { data, setData } = props;

  const [microBiomeDetails, setMicroBiomeDetails] = useState<any>({
    bacteriodetes: '',
    firmicutes: '',
    proteobacteria: '',
    actinobacteria: '',
    others: ''
  });

  const handleMicroBiomeDetailsChange = (event: any) => {
    const { name, value } = event.target;
    setMicroBiomeDetails({
      ...microBiomeDetails,
      [name]: value
    });
  };

  useEffect(() => {
    const isDataEmpty = () => {
      console.log(microBiomeDetails);
      for (const key in microBiomeDetails) {
        if (microBiomeDetails[key].trim() === '') {
          return true;
        }
      }
      return false;
    };
    if (!isDataEmpty()) {
      setData({
        ...data,
        microbiome: microBiomeDetails
      });
    }
  }, [microBiomeDetails]);

  return (
    <form className="w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="bacteriodetes"
          >
            bacteriodetes
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="bacteriodetes"
            type="number"
            placeholder="300"
            value={microBiomeDetails.bacteriodetes}
            onChange={handleMicroBiomeDetailsChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="firmicutes"
          >
            Age
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="firmicutes"
            type="number"
            placeholder="200"
            value={microBiomeDetails.firmicutes}
            onChange={handleMicroBiomeDetailsChange}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="proteobacteria"
          >
            proteobacteria
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="proteobacteria"
            type="number"
            placeholder="100"
            value={microBiomeDetails.proteobacteria}
            onChange={handleMicroBiomeDetailsChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="actinobacteria"
          >
            actinobacteria
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="actinobacteria"
            type="number"
            placeholder="200"
            value={microBiomeDetails.actinobacteria}
            onChange={handleMicroBiomeDetailsChange}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="others"
          >
            Others
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="others"
            type="number"
            placeholder="50"
            value={microBiomeDetails.others}
            onChange={handleMicroBiomeDetailsChange}
          />
        </div>
      </div>
    </form>
  );
};

export default MicroBiomeDetails;
