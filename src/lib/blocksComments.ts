interface CommentsProps {
  Nombre: string;
  Ciudad: string;
  Comentario: string;
  Calificacion: number;
  Foto: string;
}

export function BlocksComments(comments: CommentsProps[]): CommentsProps[][] {
  const block: number = 3;
  let acumu: number = 3;
  const newValue = [];
  let part = [];
  for (let i = 0; i < comments.length; i++) {
    part.push(comments[i]);
    if (i === acumu - 1) {
      newValue.push(part);
      part = [];
      acumu += block;
    }
  }
  return newValue;
}
