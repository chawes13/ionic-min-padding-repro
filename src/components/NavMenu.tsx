import React from "react";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoYoutube,
  logoTiktok,
} from "ionicons/icons";

const SOCIAL_LINK_ITEMS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: logoFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: logoInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: logoLinkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: logoYoutube,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    icon: logoTiktok,
  },
];

export default function NavMenu() {
  return (
    <IonMenu contentId="main-content" type="overlay">
      <IonContent>
        <IonList className="social-media-links">
          {SOCIAL_LINK_ITEMS.map((item) => {
            return (
              <IonMenuToggle key={item.name}>
                <IonItem
                  target="_blank"
                  rel="noreferrer"
                  href={item.href}
                  lines="none"
                  aria-label={item.name}
                  detail={false}
                >
                  <IonIcon icon={item.icon} />
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
}
