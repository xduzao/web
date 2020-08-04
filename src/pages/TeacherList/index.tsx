import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList(){
    return (
        <div id="page-teacher-list" className= "container">
            <PageHeader title="Estes são os proffys disponíveis.">
               <form id="search-teachers">
                   <div className="input-block">
                       <label htmlFor="subject">Matérias</label>
                       <input type="text" id="subject"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="week-day">Dia da semana</label>
                       <input type="text" id="week_day"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="time">Horas</label>
                       <input type="text" id="time"/>
                   </div>
               </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/257967428/xduzaomodeon_400x400.jpg" alt="Eduardo Souza"/>
                        <div>
                            <strong>
                                Eduardo Souza
                            </strong>
                            <span>Química</span>
                        </div>

                    </header>
                    <p>
                        texto do campo 
                        
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt= "Whatsapp"></img>
                            Entrar em contato
                        </button>

                    </footer>

                </article>
            </main>
        </div>

    )
}

export default TeacherList