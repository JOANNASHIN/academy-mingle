import App from '@/constants/app';
import classNames from 'classnames';
import React, { useState } from 'react';

interface IProps {}

const NoticeAddForm = () => {
  return (
    <form action="">
      <fieldset>
        <legend>공지사항 등록 폼</legend>

        <label>
          <span>제목</span>
          <input type="text" />
        </label>

        <label htmlFor="">
          <span>내용</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </label>
      </fieldset>
    </form>
  );
};

export default NoticeAddForm;
