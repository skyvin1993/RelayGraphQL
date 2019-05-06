import React, { Component } from 'react';
import { QueryRenderer } from 'react-relay';
import RelayEnv from '../../RelayEnv';
import { GET_MESSAGES } from '../../RelayEnv/Queries'
import Message from '../Message/Message';
import './styles/Styles.scss';

/**
 * Messages - компонент загрузки и рендера сообщений
 */
export default class Messages extends Component{
  constructor(props) {
      super(props);

      this.loadMore = this.loadMore.bind(this);

      this.state = {
          currentPage: 1,
      }
  }

  /**
   * Метод отображения следующей подгруженной страницы
   */
  loadMore() {
      const newPage = this.state.currentPage + 1
      this.setState({ currentPage: newPage })
  }

  /**
   * Метод загрузки и рендера сообщений
   */
  renderQueries() {
    const messages = [];
    for (let i = 1; i <= this.state.currentPage; ++i) {
      messages.push(
          <QueryRenderer
              key={i}
              environment={ RelayEnv }
              query={ GET_MESSAGES }
              variables={{ page: i }}
              render={({error, props: data}) => {
                  if (error) {
                      return <div>Error!</div>;
                  }
                  if (!data) {
                      return <div>Loading...</div>;
                  }

                  const messages = data.messages.list;

                  return messages.map((message, key) => {
                      return <Message key={key} message={message} />;
                  })
              }}
          />
      );
    }

    return messages;
  }

  /**
   * Метод рендера кнопки "Load more"
   */
  renderLoadMore() {
    return (
        <QueryRenderer
            environment={ RelayEnv }
            query={ GET_MESSAGES }
            variables={{ page: this.state.currentPage + 1 }}
            render={({error, props}) => {
                if (error || !props) {
                    return null;
                }

                const messages = props.messages.list;
                const doesPageExist = messages.length > 0;

                return doesPageExist
                    ? <button className="btn btn-secondary" onClick={this.loadMore}>Load More</button>
                    : null;
            }}
        />
    )
  }

  render() {
    return (
      <div className="WorkPage">
        <div className="WorkPageContent">
          <h1>Messages</h1>

          <div className="Messages">
            { this.renderQueries() }
          </div>
          { this.renderLoadMore() }
        </div>
      </div>
    );
  }
}
