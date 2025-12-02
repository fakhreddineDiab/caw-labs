import ProfileCard from './components/ProfileCard.jsx';

function App() {
  return (
    <div>
      <h1>My Team</h1>

      {/* Premier membre */}
      <ProfileCard
        name="Adil Chekati"
        role="Senior Lecturer"
        email="adil.chekati@univ-constantine2.dz"
      />

      {/* Deuxième membre */}
      <ProfileCard
        name="Mohamed Amin Bouchehed"
        role="Frontend Engineer"
        email="aminlazir@gmail.com"
      />
    </div>
  );
}

export default App;
