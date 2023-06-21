export const meta = () => {
  return [
    { title: 'New Expense App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return <h1>Welcome to Expense</h1>;
}
