import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FeedContainerComponent } from './pages/feed-components/feed-container.component';
import { ForumContainerComponent } from './pages/forum-components/forum-container.component';


export const MainComponent: React.FC = () => {
    return <div id="main-component">
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path="/feed">
                        <FeedContainerComponent />
                    </Route>
                    <Route exact path="/forum">
                        <ForumContainerComponent />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    </div>
}