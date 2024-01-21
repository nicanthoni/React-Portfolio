// npm package to import my avatar
// import Avatar from "avataaars";
import Avatar from "avataaars2";
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
        My name is Nic, and I'm an aspiring Full Stack Web Developer. I earned
        my bachelor's degree at the University of Central Florida where I
        studied business marketing.
      </p>

      <p>
        I found my love for development whenever I began working as a Technical
        Sucess Manager at a CI/CD company. As you could imagine, every customer
        I speak with is either a developer themself, or an exectuive at their
        organization. After having many in depth conversations with different
        teams surrounding their tech stack and ways to optimize their build
        processes on our platform, I was hooked.
      </p>

      <p>
        Over a year later, with more projects and experience under
        my belt, I'm ready to begin my journey as a fulltime developer.
      </p>
      <p>
        Happy coding! <BsRocketTakeoff />
      </p>
    </div>
  );
}
