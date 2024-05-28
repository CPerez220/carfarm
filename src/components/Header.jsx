import Stack from 'react-bootstrap/Stack';
import Header1 from '../assets/Header1';
import Header2 from '../assets/Header2';

const Header = () => {
  return (
    <Stack gap={3}>
      <div className="p-2"><Header1/><Header2/></div>
    </Stack>
  );
}

export default Header;