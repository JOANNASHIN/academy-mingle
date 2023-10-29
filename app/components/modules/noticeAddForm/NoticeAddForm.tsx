import App from '@/constants/app';
import classNames from 'classnames';
import React, { FormEvent, useState } from 'react';

interface IProps {
  onSubmit: (payload: any) => void;
}

const NoticeAddForm = ({ onSubmit }: IProps) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
  });

  const handleUpdateForm = (type: 'title' | 'content', value: string) => {
    setForm(prev => ({
      ...prev,
      [type]: value,
    }));
    console.log(form);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <fieldset>
        <legend>공지사항 등록 폼</legend>

        <label>
          <span>제목</span>
          <input type="text" value={form.title} onChange={e => handleUpdateForm('title', e.target.value)} />
        </label>

        <label>
          <span>내용</span>
          <textarea value={form.content} onChange={e => handleUpdateForm('content', e.target.value)}></textarea>
        </label>
      </fieldset>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default NoticeAddForm;
