import Chart from 'react-apexcharts'

const BarCharts = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Fernandinho', 'Barbis', 'Damázio', 'Menezes', 'Julius']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 58.4, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    
    return (
        <Chart  
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />        
    );
}

export default BarCharts;
