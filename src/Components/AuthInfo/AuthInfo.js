import React from 'react';
import { QueryRenderer } from 'react-relay';
import RelayEnv from '../../RelayEnv';
import { AUTH_INFO } from '../../RelayEnv/Queries';

/**
 * AuthInfo - компонент загрузки и рендера данных авторизации
 */
const AuthInfo = props => (
    <QueryRenderer
        environment={ RelayEnv }
        query={ AUTH_INFO }
        render={({error, props: data}) => {
            if (error) {
                return <div>Error!</div>;
            }
            if (!data) {
                return <div>Loading...</div>;
            }

            const authData = data.auth_info.account;

            return (
                <div className="ava-cont">
                    <div className="row">
                        <div className="col-4">
                            <div className="ava"><img className="ava_img" alt="ava" src={authData.small_avatar} /></div>
                        </div>
                        <div className="col-8 align-self-center">
                            <div>Login: {authData.login}</div>
                            <div>Rating = {authData.orders_statistics.rating}</div>
                        </div>
                    </div>
                </div>
            )
        }}
    />
)

export default AuthInfo;
