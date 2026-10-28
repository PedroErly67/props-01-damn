// =====================================================================
//  ATIVIDADE 01 - PROPS NO REACT
// =====================================================================
//
// Este é o componente PAI. É aqui que USAMOS os componentes e
// ENVIAMOS as props para eles.
//
// Como fazer a atividade:
//   1. Rode o projeto:  npm install  e depois  npm run dev
//   2. Procure pelos comentários  ✏️ TAREFA  (aqui e na pasta components/)
//   3. Faça as tarefas NA ORDEM (Parte 1, 2, 3, 4 e 5)
//   4. Salve o arquivo e veja o resultado no navegador
//
// Dica: use Ctrl+Shift+F no VS Code e pesquise por "TAREFA"
//       para encontrar todos os lugares que você precisa alterar.
// =====================================================================

import Saudacao from './components/Saudacao.jsx'
import CartaoAluno from './components/CartaoAluno.jsx'
import Produto from './components/Produto.jsx'
import Botao from './components/Botao.jsx'

function App() {
  return (
    <div className="container">
      <h1>Atividade: Props no React</h1>

      {/* ============================================================
          PARTE 1 - Saudacao (arquivo: components/Saudacao.jsx)
          ============================================================
          O mesmo componente, usado 2 vezes, com props DIFERENTES.
          Repare: o componente é um só, mas o resultado muda!        */}
      <section className="parte">
        <h2>Parte 1 - Minha primeira prop</h2>

        <Saudacao nome="Maria" />
        <Saudacao nome="João" />

        {/* ✏️ TAREFA 1.1
            Adicione mais um <Saudacao /> aqui embaixo com o SEU nome.  */}
        <Saudacao />
        {/* ✏️ TAREFA 1.2
            O que acontece se você usar <Saudacao /> SEM a prop nome?
            Teste aqui e anote a resposta neste comentário:
            Resposta: ficará sem o nome depois do "Olá, ".                                                */}
      </section>

      {/* ============================================================
          PARTE 2 - CartaoAluno (arquivo: components/CartaoAluno.jsx)
          ============================================================
          ATENÇÃO: texto vai entre aspas  -> curso="Front-end"
                   número vai entre chaves -> idade={17}              */}
      <section className="parte">
        <h2>Parte 2 - Várias props</h2>

        <div className="linha">
          <CartaoAluno
            nome="Ana Souza"
            curso="Desenvolvimento de Sistemas"
            idade={17}
            foto="https://i.pravatar.cc/150?img=47"
          />

          {/* ✏️ TAREFA 2.4
              Complete este cartão: adicione as props idade e foto.
              Para a foto, você pode usar: https://i.pravatar.cc/150?img=12  */}
          <CartaoAluno 
          nome="gay"
          curso="lorenzzetagem"
          idade={6.7}
          foto='./src/components/lorenzzetao.jpg' />

          {/* ✏️ TAREFA 2.5
              Crie um terceiro <CartaoAluno /> com os SEUS dados.          */}

          <CartaoAluno 
          nome="Pedrão"
          curso="Não dizer não"
          idade={3}
          foto="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xAA/EAABAwMCBAMEBwYFBQEAAAABAgMEAAUREiEGEzFBIlFhFDJxkQcVI0JSodEkVGKBk7EWM0NTwSVEcnPxNP/EABsBAAIDAQEBAAAAAAAAAAAAAAMEAAIFBgEH/8QAKBEAAgICAQQCAwEAAwEAAAAAAQIAAwQRMQUSEyEiMhRBUlEzNGEG/9oADAMBAAIRAxEAPwCD6ut37jF/oppqrfb/ANxi/wBFP6VZI2qM5rqDj1/yJzX5Fv8AsrG3QCf/AMEb+kn9KabbAP8A2Ub+kKuBO3U03ooZ6V5+PV/Mn5Nv9SBNrgfuMb+kKc7AtTCC49EioSOpLQqwFDtXiUJlXq0R3gFMuSQFpPfY4oV1dVa93bC1XWu3b3QcXbGnrb29A++Ym39q95/DmNXLhn05Iz/au1exRSjR7Mzp8uWMVWFltKVaxbogX58lI3+VZP5K/wAiagx3/ozlcGxSbunNqsEYNf78htKE/wAhjNW3eC7wykKcs1pfA6oaSAr866wlCG06QAEjsBXvQddqEbvfEMKvXM4rJiRoqiidw6thY6j2YK/tSj24TT/0/hkvjuVMJQB867UpCVDxDPxqlcLlAtTIcnyG2EE4TrPvH086t+QNfUSvgO/sZy9nga8y1HVarXCR5qQFGk/wZdLcNTlmt89odVMoSlfyNdbaUlbaVg7KGoZ8qcMEZGCPyofl98S/i9cziiRZCrluw4rLo95t1gJI+Yrxa7Ag49liuHyajhX9hXX5lnts4gzYUd5Xm42CfnT49sgRk6Y8RhsdgltIxRxkpr6iB/Hff2nH2o8aSdMPhpx4npiIAPzrx2C3GOq4cOGIgffMdJA+OM12oNpSCEhI+AxTXW23GlIdSlSCMKCtwar+QN/US3gb+pxpEO1PJCmIcRaD94ND9KlFrt42MCLn/wBQ/StjL4Fs051b9tluxipW4iuDQD326VGfo5gkb3GepX4ubTKZNGvaxZse/fppkzbLcOtvi/0k159V2/8AcIv9IfpV2/2V7hqVDBlOSYktRbBdHibUNx/KoysDtT1QosGwsTta6o6JjK8xUisCo+9OxKIU016pSUIKlkJSOpPShjnEFsQrSZic+Qyfzob2KvJllrZuBCSQCfhV7g2EbpxTziMx7cM5x1cP6ChzDzT7aVx3UOIPdJzRDhi9nhqTIElouW+SvWVoGVNK75HcUlmEtX8fccw1C2fKdOmK5cN9YOCltRB8tq5em/3qVabSiYhznay8iU2MocTpV18iDiunxZLE6Ml6OtDzLg2UNwRT2Y7LLIabZQloZGgDYD4VhTdnMIfFF2juocfD0yIbejnFO6kLUT4gPlVNXEMh2DEhvuPttsREr5Yc0KdUc7567Udl8ST2bi+1amYBLL4jpjobKnXE5GSewGDVFjiiTcro2+qFbn0MFZcaS3qcZSk4yVdjt0qSQjaeI5IM9N5koiaICC1HcUNQJB3z37VmxJeuaW3LhIRy4aGykSX+XpVjJOOp61pmzMevdpk3y322S3OJQyUNfaMDGoZz1G2/xo1xTHttthP3pVsiPSmUpAW6n1A3PlUkmWuvEM9d1mx4q1ORJTLcKPpOzbxTkq+GFCtVwG84vhiM3JcK32CppxRP3knFZpviaVCekOLat0htxaClxltSUB47e997aikXiaTHtqnvZWHnXJaWGm2UKQkqV3JPX41JIBiXObNQ3IjXeQu6uTFgx04LbaErOdQ+AqS8X+5vwbfHi3pLE+VrUdKE6UICiNRJ9KItXtu0uzYrdpgsSuakLU279moq81Y60MugjT7HJlu22ImWy+GIzkZIVzgN8J1D1NSSbWTKVC4Vdke1h9xmMVe0bYUce98M1lk8XPIEJq7FLMhqKtclHRLo0jSoehzV9Nz9tssS3WqG1LS7E1upfXpSlI2IOB1pQZ0XiB2yEW9lKFtLU4hadRbCNgAfLNSSA+HLw77H9VQZLDL7s3Bf0YAQoFWQD8q03CMuY7cLlFenKnxY6kpbkKSB4sbjbrRmdY7ZPQpEuE04FJCSSnBwKtQoUaBFTHhMoZaQPChAwKkkwP0gyfbr9Bt6D4ISTIdH8R2T+WaFVY4jZWzxldFubB9ppbfwAINVdZrb6eg8e5i57nyajZD7DI+2fbbOeilAVCJcRTbi0yWlJbSVK0rGwrk8iU9Jc1vLUpXmo5qMOLSCErUArY4PWgt1I79CML04fswtfL5JnyFhLiksDZKAdsUHye5zXlKs57Wc7Jj6Vqg0ISst1ftsxtbazoyAtPYiuiSr1bYbKVuvpHMSDpHiPyrlNOK1KHiUT8TRK8hkGoKzGWwgztH0YcbWeHAVbZ81LCucotcwYGk+tbpXGXDgdS39bRipXQhe3z6V8t4HkP1rY8D3rS6i1Sm0LYXnl6kA6T5UIDvaFPwX1O9We02+GJEiGpLq5ThdU8CCTnsDQ+3cD2aA5zY7S0uKCg6oKxztWc6h361koT86wPKlWjCm/wDVhKV4VD+HyNa1jjuyqR+0vORncDLLjZ1CvXqZDqVS1WG5dtfDMK3TUSwt991pBbZ5y9QaSewq9eLYzd7c5BlFXKcxnHoc0Ad47t24jR5r57aGSAf5mp+HOKxeri9BXAfiuNNhzLhB1J/lVO1v3CBgZdu1gjz4ceMhao3sywtpTSRsR6VSe4UU9DDLlzlKeD6Xg+rGUkdgOg61HK47s0aZIjul/DC+Wt1LZUgK+NSJ474ZU3r+tGgPJWc1O0ydwns3gy2S7c1BW2eQh3munV4nT/EaiTwRbyIzTzr7sWLqLLBXgJJ75FDLh9IC3FAWG2rlIHvOvHlpPwpsfj+Y2UifY3QMe8wsK/KreJz+pXyJ/sJf4Iixsi0y5EFCgUrSg5yg9UjPSi9rszdteQIzhEVthLLbOkYTjqc9cmgrf0h2VQ8YloV3QWTkUIu3GdyugLFijqiMEYXLkJwrH8Ka9FTk6AnhtQe9zoupO+4+dIqAGSQB61xpy3Mtq5r02dzVndz2lQKlUlW3WQl6bPca66VSVYNMDCsMAcysQzxdLYncW5iKDiI0YtOqTuNRVnGfOh+PKvWGWY6OWwgITnOB3qTSPKtjEpNSdpmRk2i19icUpUqVc3OiipUqVSSKlSpVJIqey6th1LrSiladwR2plKpuSEUXy5pc1ia6FZznP/FbvhHiz60eEO4IRzwPs3AkeL0Nczq3aneTcorhUAEupJNFS1gfcE9alSBO4BZKhkjB7elBLbdXIluuT7Cv+oXV7kxE49xtOxV8OtK7yy3a1vsHLjgCWgnqonyqOyW96NHbdlK1PaAgD8CfKtSxRYAqzNqbx7Yy3FYREiojgFQSN1K31HuTSWwwo7stZ89Ap6z2FMGc02tSKutRVrWJ3uTJIA8h6V6Tj3TTB0r3rRNKP1Kbb/ZBNkphxlSVJKgkjJHb1qRlxSkJUpQVkZyK8kMiQytlQ8Khg1Us6lKgtoc99rLZ28jiqaHePUuTtOZHxCkKajKSTqTIRj50UVsvB8zvVO5RzIjtBA3S+hXyNS3RxbcR9TYyroAPWvCSrnU89MoEqW/XIdky1k6FOFDSQegScVfqNhkRojLKfuIA+J70/b8NETj3B2aLepxalSpVy86aKlVqFAelr+zThI6qPSi3+HPs/C/uOxTVGsVTomWCMRsTP16BkgVJIYVHeU0v3knBq7arY7MeyRpaT1OOvpXpYAbkCknUc9Y5LbXM1JIwNhQxQKSUqBBHnW3npebjFTBAIGTkVWajNToKFvtJLjg3VjFBW71sxl8fgCZCvc1eVa5Kuc5HZU4y2vSVJGafb7HPnOhDUdYTndak7CmAC3EUYheZs+BJAl23Q+Na46/sirfY1qVZzv5UOslpatEJEdGFL6rV5miLi0NNlbiwlI6qUa3MdO1B3TEyPk/xkK+tIDzoS9xNbEuFCHVuEHBLacgVZZu8JyOqSJCA2372o4Iovnr3rcF4LNb1CCa9ofbLzBnuqaYkNlf4M4NEx6VcWK3E8KMvIke+rNepSlIUEgDUcn1NVbjcY0FvVJdCc9B3Pwocq9ifpiWk/tbqgkF1JGkedDsvrrG2M9Sl3OlEO4J2pi1AbUKPDt3Tlf14S6N9Ojwk1UdvNwYc9hegLeuCeqWx4VD8WaSq6tj2sQDxGX6beg4hxSiQrAztQ0icSTqSPTBqsmVxEyeY5aAtofdQvxV4eI8HCrVMB7jl0YZ9DcNKHCuH6nNK9SNSgPPalXqThQPcGsabU2kVtqFAQkA6E7k+ZqKC8p2U8gai2nB3qeK+mTCStGFHT7tOiMqZ1uODxuHKh5Vmn2T3TSTWhqDrnEadusfWnKVg6qMMpQyjQgYQN6aW0lYWQCR0PlXktJMVwI94JOBXpYsNSwrCnujptvlv8LTLwV6IwWENhI3WScEn0qlJX7Fbjp+4kAb1prheYUH6KGoq0hx2SoobTn3SO9Y59x64WtWGSjCQc596jmsdogA5LGazhWL7JYWM5Djp5jh8yaLIGNgSB5Ch1hmtzrRHW2cqSgIWkdiKKJA866XGRfGJzGS7eQz34Cs7dWHr3fU2pKiiKygLfx96jkuSzEYU9JWENp6k0Jtz82Re/rKFAcEZxsNLU4QNY7ECl+p3Gqg6MN0+rvtGx6mghQYsKOGY0dtCQMe71qCbY7fOdbcfjp1IUFbDGfjRAVIBtXzZsy4OSGnY+CvWtQFxBZhIjNu25ltuaysKbWBj51n75/iGAyhydJQYqlALWyMFGa32nas3xzIbaszkcjU7IIS2gdzWp07qt4cV87ieVh1EFoCjarbMbmuH2ptWls8zcgK2yK3aGkeFQbSCOhxvXOG3Z6QwqcwkRkOJWvR1SBXSmXUOtpcaVqbWNST5g0319nUKwi/TQpJEdjYedQKit88v6cOlGgq8xVkUiM1y6Oy8Ga5QHmQJTg0/JpxTTa9Fjf7IyCcLnRlMzX2ghWErIxj1onbrAuSyHn18sE7JxviiTYLciZcFKSphUnQ4nGcZ6H54owgbbYxXbZFprOhMXGrFg2YFRaHox/ZJRQPJQzRBlt1LaQ8vWsd6tHHQ0xRpXyFuY+KwvEjGc1KkGklPengV7qXlR6Aw4UBxBUhO4TnYHzxU4SlKdISAMYx2r1xxKN1nA6ZppV6Eepr35alNKDuDH1O2NftsBZShSgHGjuDW8jrDjKHc++gK+dYCQl28y0wInibBBcX2TW3lPmLBKk4BbRpT8cYFb/TC5Huc91RU7vjzA/FaDJlWqGrPKek+PyPWte2lISA3jQBhOPIVkeIbfJm2lkoX+0skOZzjtuKLcNXdiXEZjrVok4/ySMaQKxv/AKNLSvcOI90cprtPMNg71IKj2p6a4nU6KemsxxpbX5keLJiJUpyM7qKR1Ka0+M0x5YabUtWSEjJx3o2LcabQ4gra+9CpnOHbklZ9nDDnOX4UoUO5rRWp682eG1Gl29UlsJw2pjqB609pab9f4r0RlXscQlS3lJxrX5CtTOlM2+KuS8oJQhOT+lddkWjKrAsEy8fG8TEgzNKkXyQBLbh8iMz41NrPjcHejbMhqQ0h5hWpCxkY3xVix2u635tqdLe9hhrGW2EJBcUPMk5xQO5cOTbXdZDFtllkgBYKhlDgPp2NZ93TVdPiNRgZGm1DPUV5g0HguXGJNTHucht32hOW1JTpGR1FF9XrWDkY70t2mNhwwmIftTLVwft0cfZyoijvv4knOapWx4uwmtZ8aRoV8R1rQXFIZ4gtb3QK1tkn1FA5jIt17ksacNP/AGrflk9a7nLq2DOb6fdogSY1EhwvLKY7a3SOyBnFJzxhWOuOtG+G7rBbiCKvRFfTsc7aj55rPRAZuM0GJiXHZIiBBP8AuOAUvYr3jU3BbeGdw24M1Hf7LLajqlFxyYHVnS4leCnP/FDouqwaJDlwU9KzqSyhzwJ/8qOKxAPZozy+OKFvcDiFNOhYSUK2KVVZb4ZkOtNKcuLgbUkFSAOlUYDUriK6B54qMZDvMcWfvHyrcq7gJ27Vp4OIr+2mVnZjJ6WD4UKNaY6uUMNgZUruaddD+woc+6XG1Y9M1bfbS9HcaIxrSRnyqrDX9YW9yO9gOoHLWD2IrY0tY7RMjZs+RhAAHFCrc43H4yeadCQp6OOSSOmM5qWBPQgiLMIakI8Pi21DzFQcR2xc4IlQHdExkHSR39KRzqRfSUjWJb4bQx4mrQUlOUq1A7ginJOKwtq4rVb8xLnHWyGWEpSCD4lDrv60Qc4ybeS0i3x1vOaeY7j7ie9cBd0u5X0BOsry62Xe5rc01RIOwz6UOj3y3Osh1E1rTjJyrGKE3TjCO19lbsypBzgI6D1pVMK8vrUK1y6l2HcEwF3hprK2oxDiUjzPashx7e5TiYMFxxPOQ2HXdA2ClbgfyopwpGmTk3Fl9ZSZAK1qI6KqSdwPKu/FyHX3UJguFJccz0wOldTSnboNM13YqdTc/Q2/Ok8IodnOKcCnVcpSjnKQcVsLhAbmMlCvCrHvAb0rdHiW6C3HipQ1GZThIGAK5n9IX0nSLTdFW6yJaUtjHNdX4gT+EU4RuKAkHcJcTcJSWrY9LenLeQ0SvQEgaEjuD1zWAVxOpKilu8MqQDhJLRyRXX7jcVzvo/fnvpDa3reXFJ/CSmvnFltrkozj3RQmxq3+wl/Mwm/4jusFxuO9HlNLejvJWUg+uD+VEbrCjXiIl1a9JQnmNuIPu7UAVZYBGn2cCqE2FIt7LzkB55LKhh1vOfD6UcZSOdGLnAepRqOiQb9IipfjqjqaUSElRwSAaY/a7+4ChyFHWfxav7Udt14EpUeFaGNTLSRrWobJGOnxo46ttpK3FqwlAyTRlxq2G4u+Zah0Zz67Q71BgMty3k8pxeENIcyaYeHnnEpD0vcjcaelEkOOXe5OznP8lslLCT/eiRT/ADNJXMEbSzUxq2sXueCWU3uE2luNJYLaeiVJwKlTfbvHOZURt4DqpBogvemBOatXm2LxLWYFbySHxRBd8MgORl/xjb51aW2VuCdaXW1Kx40Z2cFD3ozbyNK0JI9RVA2xUZzmW+Q4yo9gdqeTqW/tELOlFfazVJQxdGiZkNaSDghex/kagaTAgPkNyCCdtC3cis4bleJzKoQWgJbVhyQnqahagW4SgwouOun3lEk//KK+dWBsQCYFjHRhe4z37pJ9itEdDxTst5xPhT8Kki8J3RDqJYuLbclIKQEIwkDyO1VbJJk2e6KgQmeew4kuaPvDHXBra2+dGuEcuxydj4knqk+RpRrRb7mpjYqqO0mZS3WuBcZ7lvu8FDVwSNSVNqKUOjz2q6jhCQ04hDS2EIKfEQMY9AO9Xbu2hniCzTVqCMLU2onpgjb8694gv0yBMTHisNkKTqDrhwD8KTs+PEZ8Q3ow5bobcGOhpoJ2G5CcZq5jA8hXOZ9/4jDJdaMcgdkIzVK3/SNcGXNM6O04nuUjBFCClvYlmZa/RnQjxjDhuLYIkPtJOl3DRKU/E1i+GOBJHEHFL8m5AJgc4uk53dBORitPab1b+JIL7cVWhakHnIxhSQdqImVEtUZtDr4ZShIA1Hc1dXIOjBPUH9iO+ka8xxahw/BIVzUhEgoOQy0NiD6npXKHeFyHFhHO0ajpyO1bBxy0vyk/bOgLf/yAN3VZzqPcijbsqOlxaSUjCiOlF74Dw/8AszhG9CbjJcbubbCSC24MKSR2pUqTTmPvxLnBQCY05oDwJeOKk4tcWiC00lRCX1hKyOuKVKttP+KcvZ/2JFEaQzHQ22nCUjAp3elSrHs5nTV/URHpXifdpUqpDCe16QKVKpPZ40y22khCQkHJOO5oXw4Napi1bqLuM0qVFXiLvzDHCiBI40eU5/os4QB60bu7Ddv4liyIieWqUlSXkDZKsDrjz2pUqInMEPtASJLl7BjTsFv2kjw7EYG29HbPGZn2GGzPQJI1OJCnd1ABWBvSpVZ5dj8pnZkVMS6vwWFuJZyCN8kUWtvBdlUS88wt5XXDisj5UqVCX1LW+9bh6BZ7daw4qBDZYUrYlCcE1j73KW/c3tSUBQGygNxSpV6OZUjSyhajpE2Z1ejIK21Hz360G5j732q5L+tfiV4+5rylXpgBP//Z" />
        </div>
      </section>

      {/* ============================================================
          PARTE 3 - Produto (arquivo: components/Produto.jsx)
          ============================================================ */}
      <section className="parte">
        <h2>Parte 3 - Props que mudam o comportamento</h2>

        <div className="linha">
          <Produto nome="Teclado Mecânico" preco={249.9} emPromocao={true} />
          <Produto nome="Mouse Gamer" preco={129.9} emPromocao={false} />

          {/* ✏️ TAREFA 3.4
              Este produto NÃO envia a prop emPromocao.
              Depois de fazer a TAREFA 3.1, o selo aparece ou não? Por quê?
              Resposta: ...                                                */}
          <Produto nome="Monitor 24''" preco={899} />

          {/* ✏️ TAREFA 3.5
              Crie um produto em promoção usando a forma curta:
              <Produto nome="..." preco={...} emPromocao />                */}
        </div>
      </section>

      {/* ============================================================
          PARTE 4 - Botao (arquivo: components/Botao.jsx)
          ============================================================ */}
      <section className="parte">
        <h2>Parte 4 - children e funções como props</h2>

        <div className="linha">
          <Botao cor="azul" aoClicar={() => alert('Você clicou em Salvar!')}>
            Salvar
          </Botao>

          <Botao cor="vermelho" aoClicar={() => alert('Item excluído!')}>
            Excluir
          </Botao>

          {/* ✏️ TAREFA 4.3
              Crie um botão VERDE com o texto "Enviar" que, ao ser clicado,
              mostre um alert com a mensagem "Formulário enviado!".        */}
        </div>
      </section>

      {/* ============================================================
          PARTE 5 - DESAFIO: props + listas (.map)
          ============================================================
          Na vida real os dados quase nunca são escritos "na mão".
          Eles vêm de uma lista (array), por exemplo, de uma API.

          ✏️ TAREFA 5 (desafio)
            1. Crie, ACIMA do "function App()", uma constante:

                 const turma = [
                   { id: 1, nome: 'Bia',   curso: 'Front-end', idade: 18, foto: 'https://i.pravatar.cc/150?img=5'  },
                   { id: 2, nome: 'Davi',  curso: 'Back-end',  idade: 19, foto: 'https://i.pravatar.cc/150?img=8'  },
                   { id: 3, nome: 'Luana', curso: 'Mobile',    idade: 17, foto: 'https://i.pravatar.cc/150?img=9'  },
                 ]

            2. Aqui embaixo, use turma.map() para criar um <CartaoAluno />
               para cada aluno, passando as props a partir do objeto:

                 {turma.map((aluno) => (
                   <CartaoAluno
                     key={aluno.id}
                     nome={aluno.nome}
                     ...complete as outras props...
                   />
                 ))}

            Por que precisa da prop "key"? Pesquise e responda:
            Resposta: ...
          ============================================================ */}
      <section className="parte">
        <h2>Parte 5 - Desafio: lista de alunos</h2>

        <div className="linha">
          {/* ✏️ Escreva o turma.map(...) aqui */}
        </div>
      </section>
    </div>
  )
}

export default App
