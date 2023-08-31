import style from './style';

const container = () => {
  return (
    <div css={style}>
      <h1>클래스 관리 (수정)</h1>
      <div>
        - 매일 일지, 특이사항 등록
        <br />
        - 공지사항 등록
        <br />
        - 진도 등록
        <br />
        - 오늘의 학습동영상/과제 등록
        <br />
        - 동영상 업로드 가능
        <br />
        - 기한 등록하기
        <br />
        - 리마인드 알림 여부
        <br />
        - 학생별 보<br />
        - 학생별 특이사항 등록
        <br />
        - 출석부
        <br />
        - 출결/퇴실관리
        <br />
        - 학생 정보 상세 확인 (바로 전화도 가능하게)
        <br />
      </div>
    </div>
  );
};

export default container;
