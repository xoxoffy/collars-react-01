import './Specialist.css';

interface Props {
  firstName: string;
  lastName: string;
  position: string;
  description: string;
  imgURL?: string;
}

const Specialist: React.FunctionComponent<Props> = ({
  firstName = 'Imie',
  lastName = 'Nazwisko',
  position = '[ dział ]',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imgURL = 'https://thispersondoesnotexist.com/image',
}) => {
  const photoStyle = {
    maxWidth: '500px',
    maxHeight: '500px',
    width: '100%',
    backgroundImage: `url(${imgURL})`,
    backgroundSize: 'cover',
    borderRadius: '50%',
  };

  return (
    <li className="specialist">
      <div className="specialist-image" style={photoStyle}></div>
      <div className="specialist-info">
        <h3>
          {firstName} {lastName} {position}
        </h3>
        <b>{description}</b>
      </div>
    </li>
  );
};

export default Specialist;
