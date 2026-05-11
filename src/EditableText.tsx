import React, { useRef, useEffect } from 'react';
import { EditableTextProps } from './types';

const EditableText: React.FC<EditableTextProps> = ({
  value,
  onChange,
  tag = 'span',
  style = {},
  className = '',
  editing,
  multiline = false
}) => {
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editing && ref.current) {
      ref.current.focus();
    }
  }, [editing]);

  if (!editing) {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return React.createElement(Tag, { style, className }, value);
  }

  const inputStyle: React.CSSProperties = {
    ...style,
    background: 'rgba(255,255,255,0.15)',
    border: '1.5px dashed rgba(255,255,255,0.6)',
    borderRadius: 6,
    padding: '4px 8px',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
    outline: 'none',
    backdropFilter: 'blur(4px)',
    width: multiline ? '100%' : Math.max(60, value.length * 10) + 'px',
    resize: multiline ? 'vertical' : 'none'
  };

  if (multiline) {
    return (
      <textarea
        ref={ref as React.RefObject<HTMLTextAreaElement>}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={inputStyle}
        className={className}
      />
    );
  }

  return (
    <input
      ref={ref as React.RefObject<HTMLInputElement>}
      value={value}
      onChange={e => onChange(e.target.value)}
      style={inputStyle}
      className={className}
    />
  );
};

export default EditableText;