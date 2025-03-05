import { useAuthState} from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth} from '../../Firebase';
import { Spinner, Container } from 'react-bootstrap';

function RutaProtegida({children}) {
  const [user, loading] = useAuthState(auth);
if(loading){
  return(
    <Container className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
      <Spinner animation='border'/>
    </Container>
  );
}

if(!user) return <Navigate to="/"/>


  return children


}

export default RutaProtegida