import './Specialist.css';

interface Props {
  firstName?: string;
  lastName?: string;
  position?: string;
  description?: string;
  imgURL?: string;
}

const Specialist: React.FunctionComponent<Props> = ({
  firstName = 'Imie',
  lastName = 'Nazwisko',
  position = '[ dział ]',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imgURL = 'https://thispersondoesnotexist.com/image',
}) => {
  return (
    <li className="specialist">
      <div className="specialist-photo">
        <img src={imgURL} alt="specialist-photo" />
      </div>
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
