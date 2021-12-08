import $ from 'jquery';
import dt from 'datatables.net';

export default {
    init() {
        console.log("Sib init");

        $('input').on('focus', function () {
            var label = $(this).prev('label');
            label.addClass('show');
        })
        $('input').on('focusout', function(e) {
            var label = $(this).prev('label');
            if (this.value == "") {
                label.removeClass('show');
            } 
        });

        this.initializeDataTables();
        this.watchFloatingInputs();
        this.initializeButtonSetToggles();
        this.initializeCyberRiskProgressIndicator();
        this.initializeTextAccordions();
        this.initializeUsersChart();
        this.intiializeChildRowControls();
        this.initializeDates(this);
        this.initializeRiskStatementAddButtons(this);
        this.initializeRiskStatementDeleteButtons(this);
        this.initializeRiskTreatmentOptions();
        this.initializeWorkspaceButtonset();
        this.initializeViewPasswordButton();
    },
    initializeDataTables() {
        $("#usersTable").DataTable({ 
            responsive: true, 
            "pagingType": "full_numbers",
            language: {
                searchPlaceholder: "Search Users",
                "paginate": {
                    'previous': '<button class="button clear"><i class="fas fa-chevron-left"></i></button>',
                    'next': '<button class="button clear"><i class="fas fa-chevron-right"></i></button>'
                },
                "sSearch": '<span class="searchIconContainer"><i class="fas fa-search"></i></span>',
                "emptyTable": "No users found"
            },
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
            }
        });

        $("#informationTypeWorksheetTable").DataTable({ 
            responsive: true, 
            "pagingType": "full_numbers",
            "lengthChange": false,
            "columnDefs": [
                { "orderable": false,  "targets": 0 },
                { "orderable": false,  "targets": 2 },
              ],
              order: [[1, 'asc']],
            language: {
                searchPlaceholder: "Search",
                "paginate": {
                    'previous': '<button class="button clear secondary"><i class="fas fa-chevron-left"></i></button>',
                    'next': '<button class="button clear secondary"><i class="fas fa-chevron-right"></i></button>'
                },
                "sSearch": '<span class="searchIconContainer"><i class="fas fa-search"></i></span>',
                "emptyTable": "No information categories found"
            },
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
                $(this).closest('.dataTables_wrapper').find('.paginate_button').addClass('secondary');
                $(this).closest('.dataTables_wrapper').find('th').css('width', 'unset');
                $($(this).closest('.dataTables_wrapper').find('tr').find('td')[1]).css('width', '14rem');
                console.log("called");
                $(this).closest('.modalContent').scrollTop(($(this).closest('.modalContent')[0]).scrollHeight);
            }
        });

        $("#groupTable").DataTable({ 
            responsive: true, 
            "pagingType": "full_numbers",
            language: {
                searchPlaceholder: "Search Groups",
                "paginate": {
                    'previous': '<button class="button clear"><i class="fas fa-chevron-left"></i></button>',
                    'next': '<button class="button clear"><i class="fas fa-chevron-right"></i></button>'
                },
                "sSearch": '<span class="searchIconContainer"><i class="fas fa-search"></i></span>',
                "emptyTable": "No groups found"
            },
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
            }
        });

        $("#stakeholdersTable").DataTable({ 
            responsive: true, 
            "pagingType": "full_numbers",
            language: {
                searchPlaceholder: "Search Stakeholders",
                "paginate": {
                    'previous': '<button class="button clear secondary"><i class="fas fa-chevron-left"></i></button>',
                    'next': '<button class="button clear secondary"><i class="fas fa-chevron-right"></i></button>'
                },
                "sSearch": '<span class="searchIconContainer"><i class="fas fa-search"></i></span>',
                "emptyTable": "No stakeholders found"
            },
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
                $(this).closest('.dataTables_wrapper').find('.paginate_button').addClass('secondary');
            }
        });

        $("#stakeholdersTableEntered").DataTable({ 
            responsive: true, 
            "pagingType": "full_numbers",
            language: {
                searchPlaceholder: "Search Stakeholders",
                "paginate": {
                    'previous': '<button class="button clear secondary"><i class="fas fa-chevron-left"></i></button>',
                    'next': '<button class="button clear secondary"><i class="fas fa-chevron-right"></i></button>'
                },
                "sSearch": '<span class="searchIconContainer"><i class="fas fa-search"></i></span>',
                "emptyTable": "No stakeholders found"
            },
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
                $(this).closest('.dataTables_wrapper').find('.paginate_button').addClass('secondary');
            }
        });

        $("#projectsTable").DataTable({ 
            responsive: true, 
            "pagingType": "full_numbers",
            language: {
                searchPlaceholder: "Search Projects",
                "paginate": {
                    'previous': '<button class="button clear secondary"><i class="fas fa-chevron-left"></i></button>',
                    'next': '<button class="button clear secondary"><i class="fas fa-chevron-right"></i></button>'
                },
                "sSearch": '<span class="searchIconContainer"><i class="fas fa-search"></i></span>',
                "emptyTable": "No projects found"
            },
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
                $(this).closest('.dataTables_wrapper').find('.paginate_button').addClass('secondary');
            }
        });

        $("#controlsTable").DataTable({ 
            responsive: true, 
            "pagingType": "full_numbers",
            language: {
                searchPlaceholder: "Search Controls",
                "paginate": {
                    'previous': '<button class="button clear secondary"><i class="fas fa-chevron-left"></i></button>',
                    'next': '<button class="button clear secondary"><i class="fas fa-chevron-right"></i></button>'
                },
                "sSearch": '<span class="searchIconContainer"><i class="fas fa-search"></i></span>',
                "emptyTable": "No controls found"
            },
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
                $(this).closest('.dataTables_wrapper').find('.paginate_button').addClass('secondary');
            }
        });

        $("#rolesTable").DataTable({ 
            responsive: true, 
            "bInfo" : false,
            "paging": false,
            "searching": false,
            "lengthChange": false,
            "language": {
                "emptyTable": "No roles found"
              },
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
            }
        });

        $("#rolesTableEntered").DataTable({ 
            responsive: true, 
            "bInfo" : false,
            "paging": false,
            "searching": false,
            "lengthChange": false,
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
            }
        });

        $("#membersTable").DataTable({ 
            responsive: true, 
            "bInfo" : false,
            "paging": false,
            "searching": false,
            "lengthChange": false,
            "language": {
                "emptyTable": "No members found"
              },
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
            }
        });

        $("#membersTableEntered").DataTable({ 
            responsive: true, 
            "bInfo" : false,
            "paging": false,
            "searching": false,
            "lengthChange": false,
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
            }
        });
        
        $("#membersTableEntered2").DataTable({ 
            responsive: true, 
            "bInfo" : false,
            "paging": false,
            "searching": false,
            "lengthChange": false,
            drawCallback: function () {
                $(this).closest('.dataTables_wrapper').append('<div class="clear"></div>');
            }
        });
    },
    displaySuccessToast(msg) {
        $('.success.toast').stop();
        $('.success.toast').css('opacity', '1.0');
        $('.success.toast .toast-content').html(msg);
        $('.success.toast').removeClass('hide');
        $('.success.toast').on("mousemove", function() {
            $('.success.toast').stop();
            $('.success.toast').css('opacity', '1.0');
        });
        $('.success.toast').on("mouseout", function() {
            $('.success.toast').fadeTo( 2000, 0.0, function() {
                $('.success.toast').addClass('hide');
                $('.success.toast').css('opacity', 1.0);
            });
        });
        setTimeout(function() {
            $('.success.toast').fadeTo( 2000 , 0.0, function() {
                $('.success.toast').addClass('hide');
                $('.success.toast').css('opacity', 1.0);
            });
        }, 5000);
    },
    collapseLeftNav() {
        console.log("collapsing left nav");
        $(".sib-leftnav").toggleClass('collapsed');
        $(".sib-leftnav i").toggleClass('fa-2x margin-bottom-1');
    },
    watchFloatingInputs() {
        $(".floated-label-wrapper input").on('focus', function(e) {
            $(e.target).closest('.floated-label-wrapper').addClass('focused');
        });
        $(".floated-label-wrapper input").on('focusout', function(e) {
            $(e.target).closest('.floated-label-wrapper').removeClass('focused');
        });

        $('.floated-label-wrapper select').on('focus', function(e) {
            $(e.target).closest('.floated-label-wrapper').addClass('focused');
        });

        $('.floated-label-wrapper select').on('focusout', function(e) {
            $(e.target).closest('.floated-label-wrapper').removeClass('focused');
        });

        $('.floated-label-wrapper select').on('change', function(e) {
            $(e.target).parent().find('label').addClass('show');
        });

        $('.floated-label-wrapper textarea').on('focus', function(e) {
            $(e.target).parent().find('label').addClass('show');
            $(e.target).closest('.floated-label-wrapper').addClass('focused');
        });

        $(".floated-label-wrapper textarea").on('focusout', function(e) {
            if ($(e.target).val().length == 0) {
                $(e.target).parent().find('label').removeClass('show');
            }
            $(e.target).closest('.floated-label-wrapper').removeClass('focused');
        });
    },
    toggleRolesTables() {
        $('.rolesTableContainer').addClass('hide');
        $('.rolesTableEnteredContainer').removeClass('hide');
    },
    toggleMembersTables() {
        $('.membersTableContainer').addClass('hide');
        $('.membersTableEnteredContainer').removeClass('hide');
    },
    toggleStakeholdersTables() {
        $('.stakeholdersTableContainer').addClass('hide');
        $('.stakeholdersTableEnteredContainer').removeClass('hide');
    },
    initializeButtonSetToggles() {
        $('.toggle-group .button').on('click', function(event) {
            $(event.target).parent().find('.selected').removeClass('selected'); 
            $(event.target).addClass('selected');
        });
    },
    initializeCyberRiskProgressIndicator() {
        $('.cyber-risk-progress-indicator li').on("click", function(e) {
            let targetIndex = $(e.target).index()
            let timelineItems = $(e.target).closest('.timeline').find('li');
            timelineItems.removeClass('selected');
            timelineItems.removeClass('complete');
            for (var i = 0; i < targetIndex; i++) {
                $(timelineItems[i]).addClass("complete");
            }
            $(timelineItems[targetIndex]).addClass('selected');
            let cyberRiskProjectPages = $('.cyber-risk-project-page');
            cyberRiskProjectPages.addClass('hide');
            $(cyberRiskProjectPages[targetIndex]).removeClass('hide');
        });

        $('.project-navigation button.right').on("click", event => {
            this.incrementProjectPhase();
        });

        $('.project-navigation button.left').on("click", event => {
            this.decrementProjectPhase();
        });
    },
    initializeTextAccordions() {
        $('.text-accordion').click(function(e) {
            $(e.target).children('span').toggleClass('hide');
            $(e.target).find('.text-accordion-content').toggleClass('hide');
        });
    },
    initializeUsersChart() {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];
          
        const data = {
            labels: labels,
            datasets: [{
                label: 'Users',
                backgroundColor: '#0092DF',
                borderColor: '#0092DF',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };
          
        const config = {
            type: 'line',
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }
            }
        }; 
          
        if ($('#users-chart').length > 0) {
            new Chart(
                document.getElementById('users-chart'),
                config
            );
        }
    },
    intiializeChildRowControls() {
        $('.child-row-control').on('click', function(e) {
            $(e.target).find('.fas').toggleClass('hide');
            $(e.target).closest('tr').next('tr').toggleClass('hide');
        });
    },
    initializeDates(ctx) {
        $('.today').each(function(i, e) {
            var dayOffset = $(e).data('offset') ? $(e).data('offset') : 0;
            $(e).html(ctx.getFormattedDate(dayOffset));
        });
    },
    initializeRiskStatementAddButtons(ctx) {
        $('.toggleRiskStatementButton').on("click", function(e, ctx) {
            $(e.target).closest('td').find('.toggleRiskStatementButton').toggleClass('hide');
            $('.newRiskRow').toggleClass('hide');
            $('.riskRegisterDefaultMessage').toggleClass('hide');
            //e.target.scrollIntoView();
            if (!$('.newRiskRow').hasClass('hide')) {
                $(window).scrollTop($(window).scrollTop() + 180);
                sib.displaySuccessToast('Risk statement added to register');
            } else {
                $(window).scrollTop($(window).scrollTop() - 180);
                sib.displaySuccessToast('Risk statement removed from register');
            }
        });
    },
    initializeRiskStatementDeleteButtons(ctx) {
        $('.deleteRiskStatementButton').on("click", function(e, ctx) {
            $('.newRiskRow').toggleClass('hide');
            $('.riskRegisterDefaultMessage').toggleClass('hide');
            //e.target.scrollIntoView();
            sib.displaySuccessToast('Risk statement removed from register');

            $($('.toggleRiskStatementButton.alert:visible')[0]).closest('td').find('.toggleRiskStatementButton').toggleClass('hide');
        });
    },
    initializeRiskTreatmentOptions() {
        $('.riskTreatmentOption').click(function(e) {
            var parentGrid = $(e.target).closest('.grid-x');
            parentGrid.find('.riskTreatmentOptions input').prop('checked', false);
            $(e.target).prop('checked', true);
            $('.riskTreatments>div').addClass('hide');

            if ($(e.target).hasClass('transfer')) {
                console.log("transfer");
                parentGrid.find('.riskTreatments .transfer').removeClass('hide');
            } else if ($(e.target).hasClass('avoid')) {
                parentGrid.find('.riskTreatments .avoid').removeClass('hide');
            } else if ($(e.target).hasClass('accept')) {
                parentGrid.find('.riskTreatments .accept').removeClass('hide');
            } else if ($(e.target).hasClass('mitigate')) {
                parentGrid.find('.riskTreatments .mitigate').removeClass('hide');
            }
        });
    },
    initializeWorkspaceButtonset() {
        $('.active-activities').on('click', function(e) {
            console.log("active clicked");
            $('.active-activities-container').removeClass('hide');
            $('.completed-activities-container').addClass('hide');
        });
        $('.completed-activities').on('click', function(e) {
            console.log("completed clicked");
            $('.active-activities-container').addClass('hide');
            $('.completed-activities-container').removeClass('hide');
        });
    },
    initializeViewPasswordButton() {
        $('.viewPasswordButton').on('click', function(e) {
            console.log("clicked");
            $(e.target).find('.fas').toggleClass('hide');
            var pwInput = $('#password-input');
            if ($(pwInput).get(0).type == 'password') {
                console.log("type is pw");
                $(pwInput).get(0).type='text';
            } else {
                console.log("type is not pw");
                $(pwInput).get(0).type='password';
            }
        });
    },
    getFormattedDate(dayOffset) {
        var date = new Date();
        if (dayOffset) {
            date.setDate(date.getDate() + dayOffset); 
        }
            
        var year = date.getFullYear();
      
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
      
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return month + '/' + day + '/' + year;
    },
    incrementProjectPhase() {
        var currPageIndex = $('.cyber-risk-progress-indicator .selected').index();
        let targetIndex = currPageIndex;
        let timelineItems = $('.cyber-risk-progress-indicator li');
        if (currPageIndex < timelineItems.length - 1) {
            targetIndex++;
        }
        timelineItems.removeClass('selected');
        timelineItems.removeClass('complete');
        for (var i = 0; i < targetIndex; i++) {
            $(timelineItems[i]).addClass("complete");
        }
        $(timelineItems[targetIndex]).addClass('selected');
        let cyberRiskProjectPages = $('.cyber-risk-project-page');
        cyberRiskProjectPages.addClass('hide');
        $(cyberRiskProjectPages[targetIndex]).removeClass('hide');
    },
    decrementProjectPhase() {
        var currPageIndex = $('.cyber-risk-progress-indicator .selected').index();
        let targetIndex = currPageIndex;
        let timelineItems = $('.cyber-risk-progress-indicator li');
        if (currPageIndex > 0) {
            targetIndex--;
        }
        timelineItems.removeClass('selected');
        timelineItems.removeClass('complete');
        for (var i = 0; i < targetIndex; i++) {
            $(timelineItems[i]).addClass("complete");
        }
        $(timelineItems[targetIndex]).addClass('selected');
        let cyberRiskProjectPages = $('.cyber-risk-project-page');
        cyberRiskProjectPages.addClass('hide');
        $(cyberRiskProjectPages[targetIndex]).removeClass('hide');
    },
    openURL(url) {
        window.location.href = url;
    },
    disableItem(ctx) {
        $($(ctx).closest('.sib-card').find('> div')[0]).addClass('hide');
        $($(ctx).closest('.sib-card').find('> div')[1]).removeClass('hide');
       
        $(ctx).closest('.sib-card').addClass('disabled');
    },
    enableItem(ctx) {
        $($(ctx).closest('.sib-card').find('> div')[0]).removeClass('hide');
        $($(ctx).closest('.sib-card').find('> div')[1]).addClass('hide');
        
        $(ctx).closest('.sib-card').removeClass('disabled');
    },
    showBIAnalysisValue() {
        $('#bi-panel-1 .analysis-value').removeClass('hide');
        $('#bi-panel-1 .concern-level-not-set').addClass('hide');
    },
    showITAnalysisValue() {
        $('#it-panel-1 .analysis-value').removeClass('hide');
        $('#it-panel-1 .values-not-set').addClass('hide');
    },
    toggleTableCheckboxes(ctx) {
        $(ctx).closest('table').find('td input').prop('checked', $(ctx).prop('checked'));
    },
    toggleInformationTypeWorksheet() {
        $('.informationTypeWorksheetDefault').addClass('hide');
        $('.informationTypeWorksheetContent').removeClass('hide');
    }
 }