
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guia de Cultivo: Plantas e Colheitas</title>
    <style>
        :root {
            --primary-color: #2e7d32;
            --secondary-color: #4caf50;
            --text-color: #333;
            --bg-color: #f4f9f4;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            color: var(--text-color);
            background-color: var(--bg-color);
        }

        header {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 2rem 1rem;
        }

        nav {
            background-color: #1b5e20;
            padding: 0.5rem;
            text-align: center;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
        }

        nav a:hover {
            text-decoration: underline;
        }

        .container {
            max-width: 1100px;
            margin: 20px auto;
            padding: 0 20px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border-top: 5px solid var(--secondary-color);
        }

        h2 {
            color: var(--primary-color);
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }

        h3 {
            color: var(--secondary-color);
            margin-top: 0;
        }

        .dicas-gerais {
            background-color: #e8f5e9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }

        footer {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 40px;
        }
    </style>
</head>
<body>

    <header>
        <h1>Guia Universal de Cultivo e Colheita</h1>
        <p>Aprenda a cuidar de todo tipo de plantação, do quintal ao campo.</p>
    </header>

    <nav>
        <a href="#pilares">Pilares do Cultivo</a>
        <a href="#tipos">Tipos de Plantações</a>
    </nav>

    <div class="container">
        
        <section id="pilares" class="dicas-gerais">
            <h2>Os 4 Pilares do Cuidado com Plantas</h2>
            <ul>
                <li><strong>Solo e Nutrição:</strong> Mantenha a terra rica em matéria orgânica (composto, húmus) e bem drenada.</li>
                <li><strong>Rega Adequada:</strong> A maioria das plantas prefere solo úmido, mas nunca encharcado. Regue na base, evitando molhar as folhas.</li>
                <li><strong>Luminosidade:</strong> Entenda a necessidade de cada espécie (Sol pleno, meia-sombra ou sombra).</li>
                <li><strong>Controle de Pragas:</strong> Monitore visualmente e utilize soluções naturais como óleo de neem ou calda de fumo se necessário.</li>
            </ul>
        </section>

        <section id="tipos">
            <h2>Guias por Categoria de Plantação</h2>
            
            <div class="grid">
                <div class="card">
                    <h3>Hortaliças e Verduras</h3>
                    <p><strong>Exemplos:</strong> Alface, tomate, cenoura, pimentão.</p>
                    <p><strong>Cuidados:</strong> Exigem pelo menos 4 a 6 horas de sol direto por dia. O solo deve ser muito rico em nitrogênio.</p>
                    <p><strong>Colheita:</strong> Colha folhas externas da alface para que continue crescendo. Tomates devem ser colhidos bem firmes e coloridos.</p>
                </div>

                <div class="card">
                    <h3>Frutíferas</h3>
                    <p><strong>Exemplos:</strong> Limoeiro, macieira, morangueiro, videira.</p>
                    <p><strong>Cuidados:</strong> Necessitam de podas sazonais de limpeza para circulação de ar e luz. Exigem fósforo e potássio na floração.</p>
                    <p><strong>Colheita:</strong> Espere o ponto certo de maturação na planta (geralmente indicado pela mudança de cor e aroma).</p>
                </div>

                <div class="card">
                    <h3>Grãos e Cereais</h3>
                    <p><strong>Exemplos:</strong> Milho, feijão, soja, trigo.</p>
                    <p><strong>Cuidados:</strong> Geralmente cultivados em grandes áreas. Exigem espaçamento correto para evitar competição por nutrientes.</p>
                    <p><strong>Colheita:</strong> A colheita geralmente é feita quando a planta seca e os grãos atingem o teor de umidade ideal para armazenamento.</p>
                </div>

                <div class="card">
                    <h3>Plantas Ornamentais e Flores</h3>
                    <p><strong>Exemplos:</strong> Rosas, orquídeas, suculentas, samambaias.</p>
                    <p><strong>Cuidados:</strong> Atenção individualizada. Suculentas precisam de pouca água; samambaias adoram umidade alta e sombra.</p>
                    <p><strong>Colheita/Poda:</strong> Remova flores murchas para estimular novas florações e manter a energia da planta.</p>
                </div>
            </div>
        </section>

    </div>

    <footer>
        <p>&copy; 2026 Almanaque do Produtor - Cultivando um futuro mais verde.</p>
    </footer>

</body>
</html>
