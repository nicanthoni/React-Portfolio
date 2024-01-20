// npm package to import my avatar
import Avatar from "avataaars";
import { BsRocketTakeoff } from "react-icons/bs";


export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>

      <Avatar
        avatarStyle="Transparent"
        topType="ShortHairShortCurly"
        accessoriesType="Round"
        hairColor="BrownDark"
        facialHairType="MoustacheMagnum"
        facialHairColor="BrownDark"
        clotheType="Hoodie"
        clotheColor="White"
        eyeType="Default"
        eyebrowType="Default"
        mouthType="Smile"
        skinColor="Light"
      />
      <p className="first-p">
        My name is Nic, and I'm a 29 year old aspiring FullStack Web Developer.
        I earned my Bachelor's degree at the University of Central Florida where
        I studied business marketing.
      </p>

      <p>
        I found my love for development whenever I began working as a Technical
        Sucess Manager at a CI/CD company. As you could imagine, every customer
        I speak with is either a developer themself, or an exectuive at their
        organization. After having many in depth conversations with different
        teams surrounding their tech stack and ways to optimize their build
        processes on our platform, I quickly found how interesting and exciting
        this whole tech world to be.
      </p>

      <p>
        Now, over a year later with countless projects and more experience under
        my belt, I'm ready to begin my journey as a fulltime developer. Happy
        coding! <BsRocketTakeoff/>
      </p>
    </div>
  );
}
