import App from '@/constants/app';
import classNames from 'classnames';
import React, { FormEvent, useState } from 'react';
import style from './NoticeAddForm.style';

export interface Form {
  title: string;
  content: string;
}

interface IProps {
  onSubmit: (payload: Form) => void;
}

const NoticeAddForm = ({ onSubmit }: IProps) => {
  const [form, setForm] = useState<Form>({
    title: '',
    content: '',
  });

  const handleUpdateForm = (type: keyof Form, value: string) => {
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
    <form css={style} onSubmit={e => handleSubmit(e)}>
      <fieldset className="form__field">
        <legend>공지사항 등록 폼</legend>

        <label>
          <span>제목</span>
          <input
            type="text"
            value={form.title}
            onChange={e => handleUpdateForm('title', e.target.value)}
            maxLength={10}
          />
        </label>

        <label>
          <span>내용</span>
          <textarea
            value={form.content}
            onChange={e => handleUpdateForm('content', e.target.value)}
            maxLength={50}
          ></textarea>
        </label>
      </fieldset>
      <div className="form__bottom">
        <button type="submit" className="form__submit">
          등록
        </button>
      </div>
    </form>
  );
};

export default NoticeAddForm;
