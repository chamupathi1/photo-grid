import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../common/Layout';
import { fetchAllPhotos } from './actions';

const Selct = () => {
        const dispatch = useDispatch();

        useEffect(() => {
                dispatch(fetchAllPhotos())
        },[])

        return (
                <Layout>
                        Select
                </Layout>
        );
};

export default Selct;