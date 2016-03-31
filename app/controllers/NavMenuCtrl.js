angular.module('AnestWebApp').controller('NavMenuCtrl', ['$scope', function ($scope) {
    $scope.items = [
        {
            text: 'Pacientes',
            icon: 'flaticon-unhealthy-medical-condition',
            link: '/pacientes'
        },
        {
            text: 'Patologias',
            icon: 'flaticon-three-hexagons-cell-symbol',
            link: '/patologias'
        },
        {
            text: 'Medicamentos',
            icon: 'flaticon-drugs-capsules-and-pills',
            link: '/medicamentos'
        },
        {
            text: 'Profissionais',
            icon: 'flaticon-medical-doctor-specialist',
            link: '/profissionais'
        }
    ];
}]);