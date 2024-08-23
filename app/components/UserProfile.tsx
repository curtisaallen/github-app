'use client'
import { GitHubUser } from "../interface/GitHubUser";
import Image from "next/image";
import location from "@/public/icon-location.svg";
import twitter from "@/public/icon-twitter.svg";
import website from "@/public/icon-website.svg";
import company from "@/public/icon-company.svg";

interface UserProfileProps {
  user: GitHubUser;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const userDate = new Date(user.created_at);
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
  }).format(userDate);
    return (
      <div className="shadow-md bg-white p-3 mb-5 rounded-lg flex dev-profile">
        <div className="w-32 me-4">
            <img src={user.avatar_url} alt={`${user.name}'s avatar`} className="rounded-full" />
        </div>
        <div className="w-32 grow px-3">
          <div className="flex flex-row profile-header mb-3">
            <div className="basis-1/2">
               <h3>{user.name}</h3>
               <a href={user.html_url}>{`@${user.login}`}</a>
            </div>
            <div className="basis-1/2 profile-date">
                <p>
                {`Joined ${formattedDate}`}
                </p>
            </div>
          </div>
          <div className="profile-bio mb-3">
             {user.bio ? (<p>{user.bio}</p>) : (<p>This profile has no bio</p>)}
          </div>

          <div className="flex profile-repos p-4 flex-row">
             <div className="flex-1">
                 <h4>repos</h4>
                 <p>{user.public_repos}</p>
             </div>
             <div className="flex-1">
                 <h4>Followers</h4>
                 <p>{user.followers}</p>
             </div>
             <div className="flex-1">
                 <h4>Following</h4>
                 <p>{user.following}</p>
             </div>
          </div>

          <div className="flex flex-row flex-nowrap link-section mt-4">
             <div className="flex flex-row flex-1 flex-grow">
                 <Image src={location} alt="location icon" className="me-2  max-h-[20px] max-w-[14px]" />
                 <p>{user.location ? user.location : 'Not Available'}</p>
             </div>
             <div className="flex flex-row flex-1 flex-grow">
                 <Image src={twitter} alt="twitter icon" className="me-2 max-h-[18px] max-w-[20px]" />
                 <p>{user.twitter_username ? user.twitter_username : 'Not Available'}</p>
             </div>
          </div>

          <div className="flex flex-row flex-nowrap link-section mt-4 mb-8">
             <div className="flex flex-row flex-1 flex-grow">
                 <Image src={website} alt="website icon" className="me-2  max-h-[20px] max-w-[20px]" />
                 <p>
                   {user.blog ? user.blog : 'Not Available'}
                 </p>
             </div>
             <div className="flex flex-row flex-1 flex-grow">
                 <Image src={company} alt="company icon" className="me-2 max-h-[20px] max-w-[20px]" />
                 <p>
                 {user.company ? user.company : 'Not Available'}
                 </p>
             </div>
          </div>

        </div>
      </div>
    );
}