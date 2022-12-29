interface ChildProps {
  color: string;
  onClick: () => void;
  children: 'ghjkl';
}

//hmlog child mein props kaa interface define karte hain kyunki Child ko pass kiya jaayega props Parent se...
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}: ChildProps) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

//hmlog jb bhi react component define karte hain toh unn components mein optionally react
// component ko kuch properties automatically assign ho jaate hain
//jaise propTypes, displayName , defaultProps, contextTypes

// ChildAsFC.defaultProps; -->Yeh work karega but
// Child.defaultProps -->Yeh work nahi karega
