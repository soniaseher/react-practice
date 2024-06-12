import { useLoaderData } from "react-router-dom"

 

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(()=> {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data);
  //   })
  // }, [])
  return (
    <div className='text-center bg-gray-700 text-white text-3xl p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width = {300} />
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/soniaseher');
  return response.json();
}