// import React from "react";
import style from '../../pages/advocate/profile/profile.module.css'

const Description = (props) => {
  const data = props.props;
  return (
    <div className={style.desc}>
      <div className={style.stats}>
        <div className={style.rate}>
          <h2>
            ₹<span>{data.pricing}</span>/h
          </h2>
          charge per hour
        </div>
        <div className={style.experience}>
          <h2>
            <span>{data.experience}</span> Years+
          </h2>
          Experience
        </div>
        <div className={style.total}>
          <h2>{data.total_jobs}</h2>
          total Appointment
        </div>
      </div>
      <div className={style.experties}>
        <h2>{data.role_title}</h2>
      </div>
      <div className={style.about}>{data.long_description}</div>
      <div className={style.languages}>
        <h3 className={style.h3}>Languages</h3>
        <div className={style.fluent}>
          <p>
            {" "}
            <span className={style.profiency}>Fluent: </span>{" "}
            {data.fluent_language.map((el, i) => {
              return <span>{el + ", "}</span>;
            })}{" "}
          </p>
        </div>

        <div className={style.fluent}>
          <p>
            {" "}
            <span className={style.profiency}>conversational: </span>{" "}
            {data.conversational_language.map((el, i) => {
              return <span>{el + ", "}</span>;
            })}{" "}
          </p>
        </div>
        {/* <div className="list">
          {data.language.map((el, i) => {
            return <div>{el}</div>;
          })}
        </div> */}
      </div>
      <div className={style.education}>
        <h3 className={style.h3}>Education</h3>
        <div className={style.edulist}>
          <div>
            {data.education.map((el, i) => {
              return (
                <div>
                  <p className={style.orgnization}>{el.university}</p>
                  <p className={style.course}>{el.course}</p>
                  <p className={style.duration}>{el.duration}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.reviews}>
        <h3 className={style.h3}>Reviews</h3>
        <div className={style['review-list']}>
          {data.reviews.map((el, i) => {
            return (
              <div className={style.review}>
                <p className={style.reviewer}>{el.name}</p>
                <p className={style.rating}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwZJREFUaEPtmeF12jAQx++g3xpTMkHJBLUnKJmgbFAyQZMJfJ6g6QRNJkg6QckENhOUTlDA6beG65OfybPBQjqQILwXf/VZut/9pdPpjHDkDx65//AKcGgFvSkQpDQA5K8KkBkvHiMa+YD1AtBNqfuE/AsAuqXT0zbj2TSiqWsILwBBSkNA/l5zlvEij+jmOACyWEW/t+LsJA+TsxcP0Bj9pdceVHC+hIIs/gkAfU2kR3mYnLtUwSnASUp9RFYA2ocZz11mJKcAwZjugfnTxggj3uYfaOhKBWcA3ZR6Zeo0+lam1InR0MLAGUAwphtg/mwxJ4BDFZwANBxcJg5nB5sTgE5KxMixyevqe2RM5hGR5Jsm240Aal3/46f36kNE7HFreThhFxnCyoC6tGny77k+YoQMgItSAxcwYeZij7zB9u9pRNr9sgZQKcJWT1KTM77fT4DxKo/ovqbk6qxBFv+pFGG+nZKOP83D5NQEoGR8Jx15T/azPEyWFW4xpW4J3e3JIdk0DbVU4ybeWJDJpnRlPVsw9v9GlK0OqM1CLwhC63zjEqoSlhlJXUIOtCdw3GYYiNLoqkRvUwpbyCpf7xmicL5vuoZancR7h0D80V7A0OS8cQlV1dgbhLDQs1JgCeIbghm/PUZ0KUldIgA1cAmRSiaxsUXGq3lE1za2G09i0wAeAbaqTsUK+DofECCbh0lkCqD1QaYbSHTzEnrTZjy1yTw7LaGguWkldFVjvkXfSLSEyqujKrf9PMIUKjoHlHFZWvisVNfqfVOkRAqcpHSNyF9Mg+7yfsEYNVWdujFFAJ0sThlqd+HNviI+FAbMH22hpJd9EUCQxWzpyAwZaXkwdVK6ZGTVgTAWhNJ0ag1g0/cs4BAfykKs1kkoOnctUM0voxqSdGoNYNH7qUVdp5SVGoJ0ag0QjGmkjZ4m6joIoxqCdGoP0NxusYr6FmpYp1MJQL3dIoy6UI219snOabTcxEVXrJphLLOS0ayyN9Rv2YHtTxBrBYweHMjgFeBAgX+e9ugV+A9Gv21A8zoWZgAAAABJRU5ErkJggg==" />
                  <span>{el.rating}/5</span> - <span>{el.date}</span>
                </p>
                <p className={style.comment}>{el.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.skills}>
        <h3 className={style.h3}>Skills</h3>
        <div className={style.list}>
          {data.skills.map((el, i) => {
            return <div>{el}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export { Description };
