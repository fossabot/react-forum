import React from 'react';
import PropTypes from 'prop-types';

const ThreadList = ({ threads }) => (
  <section className="section">
    {threads.length > 0 ? threads.map(thread => (
      <div className="container" key={thread.id}>
        <p>{thread.name}</p>
      </div>
    )) : <p>There are no threads!</p>
    }
  </section>
);

ThreadList.propTypes = {
  threads: PropTypes.array,
};

ThreadList.defaultProps = {
  threads: [],
};

export default ThreadList;
