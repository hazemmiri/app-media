import React from "react";
import "./style.css";
import Story from "./Story";
const Storise = () => {
  const storise = [
    {
      username: "hazem",
      user_photo:
        "https://scontent.ftun10-2.fna.fbcdn.net/v/t1.6435-9/47684461_513940942461094_157158617206751232_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_ohc=bv6bs_KQ27UAX-bSKoe&_nc_ht=scontent.ftun10-2.fna&oh=00_AfDNiOJMNGj9nABc5hp3BnFRRnbyksjoQlCY8iICvhcB0Q&oe=65F31C6A",
      story_photo:
        "https://img.freepik.com/vecteurs-premium/jeune-homme-anime-style-caractere-vector-illustration-design-manga-anime-boy_147933-4762.jpg",
    },
    {
      username: "Marwa",
      user_photo:
        "https://scontent.ftun10-2.fna.fbcdn.net/v/t1.6435-9/47684461_513940942461094_157158617206751232_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_ohc=bv6bs_KQ27UAX-bSKoe&_nc_ht=scontent.ftun10-2.fna&oh=00_AfDNiOJMNGj9nABc5hp3BnFRRnbyksjoQlCY8iICvhcB0Q&oe=65F31C6A",
      story_photo:
        "https://images.pexels.com/photos/2978825/pexels-photo-2978825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "mohamed",
      user_photo:
        "https://scontent.ftun10-2.fna.fbcdn.net/v/t1.6435-9/47684461_513940942461094_157158617206751232_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_ohc=bv6bs_KQ27UAX-bSKoe&_nc_ht=scontent.ftun10-2.fna&oh=00_AfDNiOJMNGj9nABc5hp3BnFRRnbyksjoQlCY8iICvhcB0Q&oe=65F31C6A",
      story_photo:
        "https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "weal",
      user_photo:
        "https://scontent.ftun10-2.fna.fbcdn.net/v/t1.6435-9/47684461_513940942461094_157158617206751232_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_ohc=bv6bs_KQ27UAX-bSKoe&_nc_ht=scontent.ftun10-2.fna&oh=00_AfDNiOJMNGj9nABc5hp3BnFRRnbyksjoQlCY8iICvhcB0Q&oe=65F31C6A",
      story_photo:
        "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <>
      <div className="storise">
        <Story type="new" />
        {storise.map((story, index) => (
          <Story key={index} type="old" data={story} />
        ))}
      </div>
    </>
  );
};

export default Storise;
