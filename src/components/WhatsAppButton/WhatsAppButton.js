// components/WhatsAppButton.js

import Image from 'next/image';
import React from 'react';
// eslint-disable-next-line react-memo/require-memo
const WhatsAppButton = () => {
  return (
    <>
      <style jsx>{`
        #app-messenger,
        #app-whatsapp {
          position: fixed;
          right: 24px;
          bottom: 25px;
          width: 60px;
          z-index: 1000;
          display: none;
        }
        #app-whatsapp {
          bottom: 10px;
          display: block;
        }
        #app-messenger i,
        #app-whatsapp i {
          font-size: 63px;
        }
        #app-whatsapp i {
          color: #1ebea5;
        }
        #app-messenger i {
          color: #0084ff;
        }

        .appWhatsapp {
          position: fixed;
          right: 26px;
          bottom: 100px;
          width: 60px;
          z-index: 1000;
        }
        .appWhatsapp img {
          height: auto;
          width: 100%;
        }

        @media screen and (max-width: 766px) {
          #fb-root {
            display: none;
          }
          #app-messenger {
            display: block;
          }
        }
      `}</style>
      <a
        className="appWhatsapp"
        href="https://api.whatsapp.com/send?phone=525523276806&amp;text=Hola! Te contacto para ..."
        id="app-whatsapp"
        target="_blank"
      >
        <Image alt="Whatsapp" height={60} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png" width={60} />
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default WhatsAppButton;
