import { AvatarCircles } from "@/components/ui/avatar-circles";

const avatarUrls = [
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_1.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_2.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_3.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_4.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_5.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_6.png",
];

export function AvatarCircle() {
  return <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />;
}
