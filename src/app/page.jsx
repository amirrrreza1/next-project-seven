const HomePage = async () => {
  const res = await fetch('http://localhost:3000/api/questions')
  const data = await res.json()
  
  
  return (<>
  Home Page
  </>);
}
 
export default HomePage;