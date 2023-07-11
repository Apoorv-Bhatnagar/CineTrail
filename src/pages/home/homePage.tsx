import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { fetchhome } from '../../api/homeAPI';
import { IPoster } from '../../interfaces/poster.interface';
import { IGenres } from '../../interfaces/genres.interface';

import MovieTitle from '../../components/movie/movieTitle';

import Paginate from '../../components/paginate/paginate';

import Genres from '../../components/genres/genres';
import Error from '../../components/error/error';
import Movie from '../../components/movie/movie';

const HomePage: React.FC = () => {
  const [data, setData] = useState<IPoster[]>([]);
  const [stateData, setStateData] = useState('fulfilled');
  const [genre, setGenre] = useState<IGenres>({ id: 0, name: 'All' });
  const [selectedYear, setSelectedYear] = useState('2023');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [queryParams, setQueryParams] = useSearchParams();

  const handlePage = (num: number) => {
    setPage(num);
    setQueryParams({
      genre: genre.name.toLocaleLowerCase().trim(),
      id: genre.id.toString(),
      page: num.toString(),
      year: selectedYear,
    });
  };

  const handleGenre = (toggleGenre: IGenres) => {
    setGenre(toggleGenre);
    setPage(1);
    setQueryParams({
      genre: toggleGenre.name.toLocaleLowerCase().trim(),
      id: toggleGenre.id.toString(),
      year: selectedYear,
      page: '1',
    });
  };

 

  useEffect(() => {
    const id = queryParams.get('id') ?? 0;
    const genre = queryParams.get('genre') ?? 'All';

    setGenre({ id: Number(id), name: genre });

    setSelectedYear(queryParams.get('year') ?? '2023');
    setPage(Number(queryParams.get('page') ?? '1'));
  }, [queryParams]);

  useEffect(() => {
    const id = queryParams.get('id') ?? 0;
    const genre = queryParams.get('genre') ?? 'All';
    const page = queryParams.get('page') ?? '1';
    const year = queryParams.get('year') ?? '2023';

    (async () => {
      try {
        setStateData('pending');

        const data =
          genre.toLowerCase() !== 'all'
            ? await fetchhome(year, Number(page), null, Number(id))
            : await fetchhome(year, Number(page), null, null);
        setStateData('fulfilled');
        setData(data.results);
        setTotalPage(data.total_pages);
      } catch {
        setStateData('rejected');
      }
    })();
  }, [genre, selectedYear, page, queryParams]);

  return (
    <>
      <div className="title__head">
        <MovieTitle title={`Most Popular In ${selectedYear}`} />
       
      </div>
      <Genres handleGenre={handleGenre} genre={genre} />
      {stateData === 'rejected' && <Error />}
      {stateData === 'pending' }
      {data.length > 0 && stateData === 'fulfilled' && <Movie data={data} />}
      {totalPage > 1 && stateData !== 'pending' && (
        <Paginate totalPage={totalPage} page={page} handlePage={handlePage} />
      )}
    </>
  );
};

export default HomePage;
