/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllFaqs } from '../../redux/actions/index';
import Accordion from './Accordion';

export default function Faq() {
  const currentFaqs = useSelector(({ faqs }) => faqs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllFaqs());
  }, []);

  console.log(currentFaqs);
  return (
    <>
      <section className="Faq">
        {currentFaqs && (
          <>
            {
            currentFaqs.map((faq) => (
              <Accordion key={faq.id} title={faq.title} body={faq.body} />
            ))
            }
          </>
        )}
      </section>
    </>
  );
}
