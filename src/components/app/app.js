import { Header } from '../header/header';
import { TaskList } from '../task-list/task-list';
import { Footer } from '../footer/footer';

export function App() {
    return (
        <section class="todoapp">
            <Header />
            <section class="main">
                <TaskList />
                <Footer />
            </section>
        </section>
    );
}