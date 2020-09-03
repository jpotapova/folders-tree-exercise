export default interface FolderProps {
  id: number;
  title: string;
  children: Array<FolderProps>;
}
