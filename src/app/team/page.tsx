import { config } from "@/config";
import { Member } from "@/domain/member";
import { MemberCard } from "./Member";

const fetchTeam = async () => {
  const response = await fetch(`${config.aws.api}/members`, {
    cache: "force-cache",
  });
  return response.json();
};

const Team = async () => {
  const team = await fetchTeam();

  return (
    <section className="w-11/12 md:max-w-3xl m-auto my-32 text-center">
      <h1 className="text-5xl">We are not mundane</h1>
      <p className="my-3">
        Greetings, fellow travelers to the parallel universes! We are the zany
        team behind this indie video game, a group of mischievous developers and
        artists who live for the bizarre and the unconventional. With a
        relentless drive to push the limits of what&apos;s possible, we&apos;ve
        crafted a world of mind-bending puzzles and monstrous adventures that
        will take you on a journey to the edge of the unknown. And for us,
        success is only achieved when you think we&apos;re just a little bit
        crazy. So if you&apos;re tired of the mundane and ready for a trip to
        the strange and fantastical, step right up and join us on this wild ride
        through parallel worlds beyond your wildest dreams.
      </p>

      <div className="flex flex-wrap">
        {team.data.map((member: Member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
