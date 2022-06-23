import style from "../styles/Overview.module.css";
import useStore from "../store/store.js";
import logo from "../images/logo_back.png";
import char from "../images/overview_char.png";

function Overview() {
  const { currentStore } = useStore();
  return (
    <div className={style.overviewContainer}>
      {currentStore ?
        <div className={style.temp}>
          <div className={style.imgContainer}>
            <img src={char} alt="재고보기 이미지" />
          </div>
          <div className={style.infoContainer}>
            <div>
              <div className={style.info}>
                <span>이름</span>
                <div>{currentStore.name}</div>
              </div>
              <div className={style.info}>
                <span>전화번호</span>
                <div>{currentStore.phone}</div>
              </div>
            </div>
            <div className={style.info}>
              <span>지번주소</span>
              <div>{currentStore.addressName}</div>
            </div>
            <div className={style.info}>
              <span>도로명주소</span>
              <div>{currentStore.roadAddressName}</div>
            </div>
          </div>
          <div className={style.timeContainer}>
            <span>운영시간</span>
            <ul>
              <li>월요일 - {currentStore.time["mon_start"]} ~ {currentStore.time["mon_end"]}</li>
              <li>화요일 - {currentStore.time["tue_start"]} ~ {currentStore.time["thu_end"]}</li>
              <li>수요일 - {currentStore.time["wed_start"]} ~ {currentStore.time["wed_end"]}</li>
              <li>목요일 - {currentStore.time["thu_start"]} ~ {currentStore.time["thu_end"]}</li>
              <li>금요일 - {currentStore.time["fri_start"]} ~ {currentStore.time["fri_end"]}</li>
              <li>토요일 - {currentStore.time["sat_start"]} ~ {currentStore.time["sat_end"]}</li>
              <li>일요일 - {currentStore.time["sun_start"]} ~ {currentStore.time["sun_end"]}</li>
            </ul>
          </div>
        </div> :
        <img className={style.defaultImg} src={logo} alt="기본 이미지">
        </img>}
    </div>
  )
}

export default Overview;