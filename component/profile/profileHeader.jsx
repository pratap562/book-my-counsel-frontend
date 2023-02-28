import React from "react";
import { Time } from "./Time";
import style from '../../pages/advocate/profile/profile.module.css'
import Router from "next/router";
const data = { name: "mg", add: "maghar", edu: "BA" };
const ProfileHeader = (props) => {
  const data = props.props;
  const openSlot = (advocateId) => {
    return () => {
      console.log(advocateId)
      Router.push(`/advocate/chooseslots/${advocateId}`)
    }
  }

  return (
    <div className={style["profile-div"]}>
      <div className={style["profile-left"]}>
        <div className={style["profile-img"]}>
          <img src={data.picture} alt="Profile pic" />
        </div>
        <div className={style["name-location"]}>
          <h2>{data.name}</h2>
          <div className={style.location}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA1xJREFUaEPtmF1OGzEQgGcWKd08FU7QcILCCUhP0PC0XrdS0xMAJ6CcgHCCpg/1ep8KJwBOQHoCwgkankgrJVM5zVZRlF2P145QJPZ17Zn55s9jI2z4hxtuP7wAPHcEg0ZAJsl7QOwQQAuJtgFxbwZINCDEEQIMgehS5flVKHBvgG63u/1nPD4Hog4gbrMMIxoB4mUjjk/6/f6ItadkkReAFOIUiI7Zhi8b8Q+kp7Q+qwtRC2Dm9aen6/8pUld7sY9o0Gg239WJhjOAlHIPJhNjPC9d+HBDiKJDpdSAvwXc2ujc8/drML6wediI432XSDhFQCbJXbC0KXMz0UDl+T43CmwAKcQXADjlCvZcd6a0NvqsHwvAMXUeELFHiDdFPpu6QaI2mY4F8MZqFdGo0WzuclKJBZAK0UeATzbFiHjyPct6Ves+pOkxEZ3bZBHAt0zrrm0dC0AmyS9r4UbRPreDzDrZdHpXaRzRSOX5jjdAmqYdJPpRJYjj+eX9nEgQ4mGWZZeVum2EjPR5UFq3bHJW/ZdCDCtrAvFCZZmpm9LPmkJSiBsAOCiTUMf7hSxGFG6V1m0/AFvvd8j9ZUOstcA4EzgRoCoPKK2tMqr2SyG85FuV+yqw1YavfA6AmddflxqyzhQCeFRaVw6NHIDNLmJGGx0qrXdtqVLSRu8BoLwFB2qj5jj/+hwHGQB8Vlr3vdqoEKIVARhPVX8OtWBtn3NNjTjesQ101howslIhBgjw1sZg7scqzy8q22aSHJl7sFUWwJXSumNbxwKQQljTaEGReTrpwdbW7eI4DZPJASCasYA1dnDmIKOTBWAWWucWm6vc/rPnKxcAlyi4mbu0mut9pwg41YKX+WAd4BbFsyNgNn0Uoj0FuPazL1w3c47ArBbStAdER2uCYF/mC/1OETCbzAX/93h8w2qrbpROqVMbwGycH27mBa18yHMz/rERxy3bobVKpHMECiEB6+ERoqjNfRBYhqgNMD8bQrRW67xTFUwvgAAQXsbX6kKrvOE4ahQivI0PBlAjEkGMDwrgABHM+OAAC6e1eU1bbrFe3aaskL2LeGVNSLlH06l5EJ7dIQjgJwF0tNbmJS7otxaAhRN7dnF5FcfHdQ4pDunaADjKQ6x5AQjhRR8ZGx+Bv2ZOh0C0WOxdAAAAAElFTkSuQmCC" />
            <div>
              <p>
                {data.location}
                <span> - </span>
              </p>
              {<Time />}
            </div>
          </div>
        </div>
      </div>
      <div className={style["profile-right"]}>
        <button className={`${style["book-btn"]} ${style.button}`} onClick={openSlot(data._id)} >Book appointment</button>
        {/* <button className="profile-btn" >Email</button> */}
      </div>
    </div >
  );
};

export { ProfileHeader };
