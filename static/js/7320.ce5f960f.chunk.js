"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[7320],{41920:function(n,e,t){t.d(e,{$_:function(){return U},A9:function(){return nn},Be:function(){return X},Dp:function(){return K},Fm:function(){return J},J7:function(){return Q},Ko:function(){return H},MA:function(){return w},NC:function(){return k},O8:function(){return L},TW:function(){return A},Vr:function(){return F},YP:function(){return V},YV:function(){return Y},gw:function(){return B},nS:function(){return z},nh:function(){return _},pQ:function(){return M},r1:function(){return W},tz:function(){return R},vh:function(){return G},vp:function(){return O}});var s,i,a,r,l,o,d,m,u,c,f,h,p,y,g,Z,$,x,S,j,P,q,b,C,v,I,N,E,D=t(30168),T=t(27570),A=(0,T.Ps)(s||(s=(0,D.Z)(["\n    query allSubjects ($offset: Int!, $limit: Int!, $filter: String) {\n        allSubjects (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            school {\n                id\n                name\n            }\n            subSchool {\n                id\n                name\n            }\n            subject \n            credit\n            content\n            createUserid{\n                teacher{\n                    familyName\n                    name\n                }\n            }\n        }\n    }\n"]))),B=((0,T.Ps)(i||(i=(0,D.Z)(["\n    query allTeacherStatuss {\n        allTeacherStatuss {\n            id\n            name\n        }\n    }\n"]))),(0,T.Ps)(a||(a=(0,D.Z)(["\n    query allStudentStatuss {\n        allStudentStatuss {\n            id\n            name\n        }\n    }\n"]))),(0,T.Ps)(r||(r=(0,D.Z)(["\n    query allStudentStatusExtras {\n        allStudentStatusExtras {\n            id\n            name\n        }\n    }\n"]))),(0,T.Ps)(l||(l=(0,D.Z)(["\n    query allUsers {\n        allUsers {\n            id\n            username\n            email\n        }\n    }\n"])))),O=((0,T.Ps)(o||(o=(0,D.Z)(["\n    query userByUsername($username: String!) {\n        userByUsername(username: $username) {\n            id\n            username\n        }\n    }\n"]))),(0,T.Ps)(d||(d=(0,D.Z)(["\n    query employeesAttandanceByRange ($startDate: DateTime!, $endDate: DateTime!) {\n        employeesAttandanceByRange (startDate: $startDate, endDate: $endDate) {\n            id\n            isIn\n            isOut\n            timeIn\n            timeOut\n            user {\n                id\n                isTeacher\n                isEmployee\n                teacher {\n                    familyName\n                    name\n                    teacherCode\n                }\n                employee {\n                    familyName\n                    name\n                    employeeCode\n                }\n                groups {\n                    name\n                }\n            }\n        }\n    }\n"])))),w=((0,T.Ps)(m||(m=(0,D.Z)(["\n    query allAttendaceEmployees {\n        allAttendaceEmployees {\n            username\n            email\n            isTeacher\n            isEmployee\n            teacher {\n                teacherCode\n                familyName\n                name\n            }\n            employee {\n                employeeCode\n                familyName\n                name\n            }\n        }\n    }\n"]))),(0,T.Ps)(u||(u=(0,D.Z)(["\n    query allEmployeesCompartment {\n        allEmployeesCompartment {\n            id\n            name\n        }\n    }\n"])))),F=(0,T.Ps)(c||(c=(0,D.Z)(["\n    query allEmployees ($filter: String) {\n        allEmployees (filter: $filter) {\n            id\n            user {\n                id\n                username\n                email\n                groups {\n                    name\n                }\n            }\n            compartment {\n                id\n                name\n            }\n            employeeCode\n            familyName\n            name\n            registerNo\n            photo\n            phone\n            phone2\n            address\n            sex\n            birthdate\n            birthCity {\n                id\n            }\n            birthDistrict {\n                id\n            }\n            status {\n                id\n            }\n        }\n    }\n"]))),M=(0,T.Ps)(f||(f=(0,D.Z)(["\n  \tquery allTeachers ($offset: Int!, $limit: Int!, $filter: String) {\n        allTeachers (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            user {\n                id\n                username\n                email\n            }\n            teacherCode\n            degree{\n                id\n            }\n            access\n            familyName\n            name\n            registerNo\n            photo\n            phone\n            phone2\n            address\n            joinDate\n            joinBefore\n            sex\n            birthdate\n            birthCity {\n                id\n                name\n            }\n            birthDistrict {\n                id\n                name\n            }\n            status {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n            subSchool {\n                id\n                name\n            }\n        }\n\t}\n"]))),R=(0,T.Ps)(h||(h=(0,D.Z)(["\n  \tquery allStudents ($filter: String, $program: Int, $classes: Int, $section: Int) {\n        allStudents (filter: $filter, program: $program, classes: $classes, section: $section) {\n            id\n            user {\n                id\n                username\n                email\n            }\n            studentCode\n            surname\n            familyName\n            name\n            religion\n            registerNo\n            nationality\n            state\n            photo\n            phone\n            address\n            bodyIndex\n            vaccine\n            drug\n            allergies\n            underlyingDisease\n            bloodType\n            etc\n            activity {\n                id\n                name\n            }\n            joinDate\n            sex\n            birthdate\n            classtime {\n                id\n                name\n            }\n            birthCity {\n                id\n                name\n            }\n            birthDistrict {\n                id\n                name\n            }\n            status {\n                id\n                name\n            }\n            statusExtra {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n            classes {\n                id\n                classes\n            }\n            section {\n                id\n                section\n            }\n            program {\n                id\n                program\n            }\n            joinSchoolyear {\n                id\n                schoolyear\n            }\n        }\n    }\n"]))),U=(0,T.Ps)(p||(p=(0,D.Z)(["\n  \tquery allCitys{\n        allCitys {\n            id\n            name\n            code\n        }\n\t}\n"]))),k=(0,T.Ps)(y||(y=(0,D.Z)(["\n    query allDistricts {\n        allDistricts {\n            id\n            code\n            name\n            cityID {\n                id\n                name\n            }\n        }\n    }\n"]))),V=(0,T.Ps)(g||(g=(0,D.Z)(["\n  \tquery allPrograms{\n        allPrograms {\n            id\n            program\n            programMgl\n            maxStudentNum\n            school {\n                id\n                name\n            }\n            subSchool {\n                id\n                name\n            }\n            status\n            createdAt\n            updatedAt\n        }\n\t  }\n"]))),J=(0,T.Ps)(Z||(Z=(0,D.Z)(["\n  \tquery allSchools {\n        allSchools {\n            id\n            name\n            nameMgl\n        }\n\t}\n"]))),L=(0,T.Ps)($||($=(0,D.Z)(["\n  \tquery allSubSchools{\n        allSubSchools {\n            id\n            name\n            nameMgl\n            school {\n                id\n                name\n            }\n\t\t}\n\t}\n"]))),Q=(0,T.Ps)(x||(x=(0,D.Z)(["\n    query allSections {\n        allSections {\n            id\n            section\n            classes {\n                id\n                classes\n            }\n            program {\n                id\n                program\n            }\n            teacher{\n                id\n            }\n            program {\n                id\n                program\n            }\n            subSchool {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n            createdAt\n            updatedAt\n        }\n    }\n"]))),W=(0,T.Ps)(S||(S=(0,D.Z)(["\n    query allClassess ($program: Int!, $offset: Int!, $limit: Int!, $filter: String) {\n        allClassess (program: $program, offset: $offset, limit: $limit, filter: $filter) {\n            id\n            classes\n            # classesNumeric\n            activity {\n                id\n                name\n            }\n            program {\n                id\n                program\n            }\n            subSchool {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n            status\n            sectionSet {\n                id\n                section\n                classes {\n                    id\n                    classes\n                }\n                program {\n                    id\n                    program\n                }\n                subSchool {\n                    id\n                    name\n                }\n                school {\n                    id\n                    name\n                }\n            }\n        }\n    }\n"]))),Y=(0,T.Ps)(j||(j=(0,D.Z)(["\n    query allClasstimes {\n        allClasstimes {\n            id\n            name\n        }\n    }\n"]))),_=(0,T.Ps)(P||(P=(0,D.Z)(["\n    query allSchoolyears {\n        allSchoolyears {\n            id\n            schoolyear\n        }\n    }\n"]))),z=(0,T.Ps)(q||(q=(0,D.Z)(["\n    query allParents ($offset: Int!, $limit: Int!, $filter: String) {\n        allParents (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            familyName\n            name\n            profession\n            phone\n            address\n            student {\n                id\n                studentCode\n                familyName\n                name\n            }\n        }\n    }\n"]))),G=(0,T.Ps)(b||(b=(0,D.Z)(["\n    query sectionsByClasses ($classes: Int!) {\n        sectionsByClasses (classes: $classes) {\n            id\n            section\n            maxStudentNum\n            teacher{\n                name\n                id\n            }\n            classes {\n                id\n                classes\n            }\n            program {\n                id\n                program\n            }\n            subSchool {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n        }\n    }\n"]))),K=(0,T.Ps)(C||(C=(0,D.Z)(["\n    query transfersByStudent ($student: Int!) {\n        transfersByStudent (student: $student) {\n            id\n            student {\n                familyName\n                name\n                photo\n                studentCode\n            }\n            school {\n                id\n                name\n            }\n            program {\n                id\n                program\n            }\n            classes {\n                id\n                classes\n            }\n            section {\n                id\n                section\n            }\n            status {\n                id\n                name\n            }\n            statusExtra {\n                id\n                name\n            }\n            classtime {\n                id\n                name\n            }\n            activity {\n                id\n                name\n            }\n            docDate\n            docNum\n            description\n            oldData\n        }\n    }\n"]))),X=(0,T.Ps)(v||(v=(0,D.Z)(["\n    query allEventTypes {\n        allEventTypes {\n            id\n            name\n            color\n        }\n    }\n"]))),H=(0,T.Ps)(I||(I=(0,D.Z)(["\n    query allEvents {\n        allEvents {\n            id\n            title\n            description\n            content\n            startAt\n            endAt\n            eventType {\n                id\n                name\n                color\n            }\n        }\n    } \n"]))),nn=((0,T.Ps)(N||(N=(0,D.Z)(["\n    query allEventsByType ($id: Int!) {\n        allEventsByType (id: $id) {\n            id\n            title\n            description\n            content\n            startAt\n            endAt\n            eventType\n        }\n    }\n"]))),(0,T.Ps)(E||(E=(0,D.Z)(['\n    query allStudentsPagination ($page: Int, $perPage: Int, $filter: String = "") {\n        allStudentsPagination (page: $page, perPage: $perPage, filter: $filter) {\n            page\n            perPage\n            pageCount\n            totalCount\n            records {\n                id\n                user {\n                    id\n                    username\n                    email\n                }\n                studentCode\n                surname\n                familyName\n                name\n                religion\n                registerNo\n                nationality\n                state\n                photo\n                phone\n                address\n                activity {\n                    id\n                    name\n                }\n                joinDate\n                sex\n                birthdate\n                classtime {\n                    id\n                    name\n                }\n                birthCity {\n                    id\n                    name\n                }\n                birthDistrict {\n                    id\n                    name\n                }\n                status {\n                    id\n                    name\n                }\n                statusExtra {\n                    id\n                    name\n                }\n                school {\n                    id\n                    name\n                }\n                classes {\n                    id\n                    classes\n                }\n                section {\n                    id\n                    section\n                }\n                program {\n                    id\n                    program\n                }\n                joinSchoolyear {\n                    id\n                    schoolyear\n                }\n            }\n        }\n    }\n']))))},68694:function(n,e,t){t.d(e,{Cm:function(){return p},Cx:function(){return f},FQ:function(){return h},JX:function(){return c},dT:function(){return y},gt:function(){return Z},tL:function(){return g}});var s,i,a,r,l,o,d,m=t(30168),u=t(27570),c=(0,u.Ps)(s||(s=(0,m.Z)(["\n    query allStudents ($filter: String) {\n        allStudents (filter: $filter) {\n            id\n            familyName\n            name\n            studentCode\n        }\n\t}\n"]))),f=(0,u.Ps)(i||(i=(0,m.Z)(["\n    query allTeachers ($filter: String) {\n        allTeachers (filter: $filter) {\n            id\n            familyName\n            name\n            teacherCode\n        }\n    }\n"]))),h=(0,u.Ps)(a||(a=(0,m.Z)(["\n    query allClassess ($filter: String, $program: Int) {\n        allClassess (filter: $filter, program: $program) {\n            id\n            classes\n        }\n\t}\n"]))),p=(0,u.Ps)(r||(r=(0,m.Z)(['\n    query allSubjects ($offset: Int!, $limit: Int!, $filter: String) {\n        count (appName: "subject", modelName: "Subject", filter: $filter) {\n            count\n        }\n        allSubjects (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            subject \n            content\n        }\n    }\n']))),y=(0,u.Ps)(l||(l=(0,m.Z)(["\n    query selectProgram {\n        allPrograms {\n            id\n            program\n        }\n    }\n"]))),g=(0,u.Ps)(o||(o=(0,m.Z)(["\n    query sectionsByProgram ($program: Int!) {\n        sectionsByProgram (program: $program) {\n            id\n            section \n            classes {\n                classes\n            }\n        }\n    }\n"]))),Z=(0,u.Ps)(d||(d=(0,m.Z)(["\n    query sectionsByClasses ($classes: Int!){\n        sectionsByClasses (classes: $classes) {\n            id \n            section\n        }\n    }\n"])))},17320:function(n,e,t){t.r(e);var s=t(29439),i=t(72791),a=t(22949),r=t(73332),l=t(50419),o=t(37083),d=t(66106),m=t(30914),u=t(49389),c=t(70163),f=t(69421),h=t(76835),p=t(86586),y=t(96578),g=t(84376),Z=t(82630),$=t(21708),x=t(41920),S=t(72426),j=t.n(S),P=t(68694),q=t(38937),b=t(80184),C=a.Z.Option;e.default=function(n){var e=n.editData,t=n.formType,S=n.setIsModalVisible,v=n.refetch,I=r.Z.useForm(),N=(0,s.Z)(I,1)[0],E=(0,i.useState)([]),D=(0,s.Z)(E,2),T=D[0],A=D[1],B=(0,i.useState)([]),O=(0,s.Z)(B,2),w=O[0],F=O[1],M=(0,p.t)(P.Cx,{onCompleted:function(n){F(n.allTeachers)}}),R=(0,s.Z)(M,2),U=R[0],k=R[1].loading,V=(0,p.t)(P.FQ),J=(0,s.Z)(V,2),L=J[0],Q=J[1].data,W=(0,y.a)(x.YP).data,Y=(0,y.a)(x.J7).data,_=(0,g.D)($.FP,{onCompleted:function(n){l.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),S(!1),v()}}),z=(0,s.Z)(_,2),G=z[0],K=z[1].loading,X=(0,g.D)($.l7,{onCompleted:function(n){l.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),S(!1),v()}}),H=(0,s.Z)(X,2),nn=H[0],en=H[1].loading;return(0,i.useEffect)((function(){U({variables:{offset:0,limit:9,filter:""}}),"edit"===t?N.setFieldsValue({title:e.title,description:e.description,duration:e.duration,status:e.status,teacher:e.teacher.id,date:j()(e.date),type:e.type,section:e.section.id}):"create"===t&&N.resetFields()}),[e,U,N,t,Y]),(0,b.jsx)(o.Z,{spinning:K||en,tip:"\u0410\u0447\u0430\u0430\u043b\u043b\u0430\u0436 \u0431\u0430\u0439\u043d\u0430...",children:(0,b.jsx)(r.Z,{id:"SchoolForm",layout:"vertical",form:N,name:"school",onFinish:function(n){"edit"===t?(n.id=null===e||void 0===e?void 0:e.id,nn({variables:n})):G({variables:n})},children:(0,b.jsxs)(d.Z,{gutter:[16,24],children:[(0,b.jsxs)(m.Z,{className:"gutter-row",span:12,children:[(0,b.jsx)(r.Z.Item,{name:"title",label:(0,b.jsx)(Z.Z,{id:"title"}),rules:[{required:!0,message:(0,b.jsx)(Z.Z,{id:"form.required"})}],children:(0,b.jsx)(u.Z,{})}),(0,b.jsx)(r.Z.Item,{name:"program",label:(0,b.jsx)(Z.Z,{id:"program"}),rules:[{required:!0,message:(0,b.jsx)(Z.Z,{id:"form.required"})}],children:(0,b.jsx)(a.Z,{onChange:function(n){L({variables:{program:n,offset:1,limit:1,filter:""}})},children:null===W||void 0===W?void 0:W.allPrograms.map((function(n,e){return(0,b.jsx)(C,{value:n.id,children:n.program},e)}))})}),(0,b.jsx)(r.Z.Item,{name:"section",label:(0,b.jsx)(Z.Z,{id:"section"}),rules:[{required:!0,message:"\u0425\u043e\u043e\u0441\u043e\u043d \u043e\u0440\u0445\u0438\u0445 \u0431\u043e\u043b\u043e\u043c\u0436\u0433\u04af\u0439"}],children:(0,b.jsx)(a.Z,{children:T.map((function(n,e){return(0,b.jsx)(C,{value:n.id,children:n.section},e)}))})}),(0,b.jsx)(r.Z.Item,{name:"date",label:(0,b.jsx)(Z.Z,{id:"date"}),rules:[{required:!0,message:"\u0425\u043e\u043e\u0441\u043e\u043d \u043e\u0440\u0445\u0438\u0445 \u0431\u043e\u043b\u043e\u043c\u0436\u0433\u04af\u0439"}],children:(0,b.jsx)(c.Z,{showTime:!0,style:{width:"100%"}})}),(0,b.jsx)(r.Z.Item,{name:"status",label:(0,b.jsx)(Z.Z,{id:"status"}),rules:[{required:!0,message:"\u0425\u043e\u043e\u0441\u043e\u043d \u043e\u0440\u0445\u0438\u0445 \u0431\u043e\u043b\u043e\u043c\u0436\u0433\u04af\u0439"}],children:(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(C,{value:"OPEN",children:"\u041d\u044d\u044d\u043b\u0442\u0442\u044d\u0439"},0),(0,b.jsx)(C,{value:"CLOSED",children:"\u0425\u0430\u0430\u043b\u0442\u0442\u0430\u0439"},1)]})})]}),(0,b.jsxs)(m.Z,{className:"gutter-row",span:12,children:[(0,b.jsx)(r.Z.Item,{name:"teacher",label:(0,b.jsx)(Z.Z,{id:"teacher"}),rules:[{required:!0,message:(0,b.jsx)(Z.Z,{id:"form.required"})}],children:(0,b.jsx)(a.Z,{showSearch:!0,filterOption:!1,notFoundContent:k?(0,b.jsx)(q.Z,{cover:"content"}):(0,b.jsx)(f.Z,{image:f.Z.PRESENTED_IMAGE_SIMPLE}),onSearch:function(n){""!==n&&U({variables:{offset:0,limit:99999999,filter:n}})},children:w.map((function(n,e){return(0,b.jsxs)(C,{value:n.id,children:[" ",n.familyName," ",n.name," / ",n.teacherCode," "]},n.id)}))})}),(0,b.jsx)(r.Z.Item,{name:"classes",label:(0,b.jsx)(Z.Z,{id:"classes"}),rules:[{required:!0,message:(0,b.jsx)(Z.Z,{id:"form.required"})}],children:(0,b.jsx)(a.Z,{onChange:function(n){var e=null===Y||void 0===Y?void 0:Y.allSections.filter((function(e){return e.classes.id===n})).map((function(n){return n}));A(e)},children:null===Q||void 0===Q?void 0:Q.allClassess.map((function(n,e){return(0,b.jsx)(C,{value:n.id,children:n.classes},e)}))})}),(0,b.jsx)(r.Z.Item,{name:"type",label:(0,b.jsx)(Z.Z,{id:"onlineType"}),rules:[{required:!0,message:"\u0425\u043e\u043e\u0441\u043e\u043d \u043e\u0440\u0445\u0438\u0445 \u0431\u043e\u043b\u043e\u043c\u0436\u0433\u04af\u0439"}],children:(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(C,{value:"WEBINAR",children:(0,b.jsx)(Z.Z,{id:"WEBINAR"})}),(0,b.jsx)(C,{value:"ZOOM",children:(0,b.jsx)(Z.Z,{id:"ZOOM"})})]})}),(0,b.jsx)(r.Z.Item,{name:"duration",label:(0,b.jsx)(Z.Z,{id:"duration"}),rules:[{required:!0,message:"\u0425\u043e\u043e\u0441\u043e\u043d \u043e\u0440\u0445\u0438\u0445 \u0431\u043e\u043b\u043e\u043c\u0436\u0433\u04af\u0439"}],children:(0,b.jsx)(h.Z,{min:1,style:{width:"100%"}})}),(0,b.jsx)(r.Z.Item,{name:"description",label:(0,b.jsx)(Z.Z,{id:"description"}),rules:[{required:!0,message:(0,b.jsx)(Z.Z,{id:"form.required"})}],children:(0,b.jsx)(u.Z.TextArea,{rows:4})})]})]})})})}}}]);
//# sourceMappingURL=7320.ce5f960f.chunk.js.map