import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div className='mt-8 max-w-md m-auto'>
      <form onSubmit={onSubmit}>
        <label className='block'>
          <span className='text-gray-700 font-bold'>Search for a package:</span>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type='text'
            className='mt-2 mb-2 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
          />
        </label>
      </form>
      {error && <span className='text-red-600 font-semibold'>{error}</span>}
      {loading && <span className='font-normal text-gray-500'>Loading...</span>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
