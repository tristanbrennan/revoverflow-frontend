import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FeedContainerComponent } from './pages/feed-components/feed-container.component';
import { ForumContainerComponent } from './pages/forum-components/forum-container.component';
import { LoginComponent } from './pages/login.component/login.component';
import { BreadcrumbBarComponent } from './pages/breadcrumb-bar.component';
import { NavbarComponent } from './navbar.component';


export const MainComponent: React.FC = () => {
    return <div id="main-component">
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path="/">
                        <LoginComponent />
                    </Route>
                    <div>
                        <NavbarComponent />
                        <Route exact path="/feed">
                            <BreadcrumbBarComponent />
                            <FeedContainerComponent />
                        </Route>
                        <Route exact path="/forum">
                            <BreadcrumbBarComponent />
                            <ForumContainerComponent />
                        </Route>
                        <Route exact path="/question">
                            <BreadcrumbBarComponent />
                            {/* <PostQuestionComponent /> */}
                        </Route>
                        <Route exact path="/answer">
                            <BreadcrumbBarComponent />
                            {/* <PostAnswerComponent /> */}
                        </Route>
                    </div>
                </Switch>
            </main>
        </BrowserRouter>
    </div>
}