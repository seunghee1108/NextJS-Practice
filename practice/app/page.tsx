'use client';
import styles from './page.module.css'
import { useState } from 'react';  // CSS 모듈(page.module.css)을 사용하여 컴포넌트에 스타일을 적용 



// 'Members'라는 인터페이스를 정의한다.
// 각 멤버의 정보를 담는 객체의 형태를 정의한 것이다.
interface Members{
  hash:string;
  name:string;
  content:string;
}


// 멤버 데이터 배열 생성
const memberData:Members[] = [
  { hash: 'kim', name: '김우진', content: '김우진 소개' },
  { hash: 'bang', name: '방승희', content: '방승희 소개' },
  { hash: 'jung', name: '정영식', content: '정영식 소개' },
  { hash: 'choi', name: '최성민', content: '최성민 소개' },
];


export default function Home() {
  // useState 훅을 이용한 상태 관리
  // section 이라는 상태 변수와 그 상태를 업데이트할 수 있는 useSection 함수를 생성한다. 
  const [section, setSection] = useState('');

  // 멤버의 이름이 클릭되었을 때 호출되는 함수이다.
  // 선택된 멤버의 'hash'값을 'section' 상태로 업데이트 하고, 현재 페이지의 해시 값을 변경한다.
  const nameClick = (targetSection:string) => {
    setSection(targetSection);
    window.location.hash = `#${targetSection}`;
  };

  
  // 페이지의 메인 컴포넌트를 정의한다.
  // 이 안에서 멤버 목록('ul')과 멤버 소개 내용('div')이 표시된다.
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <ul>
          {/* 멤버 목록 출력 : 멤버 데이터를 매핑하여 각 멤버의 이름을 목록으로 출력하고, 클릭시 'nameClick' 함수를 호출한다. */}
        {memberData.map(({ hash, name }) => (
            <li key={hash} onClick={() => nameClick(hash)}>{name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.board}>
        {/* 멤버 소개 내용 출력 : 멤버 데이터를 매핑하여 각 멤버의 소개 내용을 출력하고, 현재 선택된 멤버에 해당하는 내용만 보여주도록 스타일을 제어한다. */}
      {memberData.map(({ hash, content }) => (
          <div key={hash} id={hash} style={{ display: section === hash ? 'block' : 'none' }}>
            {content}
          </div>
        ))}
      </div>
    </main>
  )
}

