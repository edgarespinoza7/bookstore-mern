import React, { useEffect, useState } from 'react'
import { getBaseURL } from '../../utils/baseURL';
import { useNavigate } from 'react-router';
import axios from "axios";
import Loading from '../../components/Loading';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
  
    const [data, setData] = useState({});
  
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${getBaseURL()}/api/admin/`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          });
  
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
  
        }
      };
  
      fetchData();
    }, []);

    if (loading) return <Loading />;
    
  return (
    <div>Dashboard 123</div>
  )
}

export default Dashboard