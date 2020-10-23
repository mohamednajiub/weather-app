import {useState, useEffect} from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState("");
  
  const onChange = ({coords}: any)  => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    let watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);
  return {...position, error};
}

export default usePosition;