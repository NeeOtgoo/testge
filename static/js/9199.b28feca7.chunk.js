"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[9199],{41920:function(n,e,t){t.d(e,{$_:function(){return w},A9:function(){return nn},Be:function(){return H},Dp:function(){return G},Fm:function(){return R},J7:function(){return z},Ko:function(){return X},MA:function(){return O},NC:function(){return V},O8:function(){return Y},TW:function(){return A},Vr:function(){return U},YP:function(){return L},YV:function(){return K},gw:function(){return B},nS:function(){return W},nh:function(){return Q},pQ:function(){return k},r1:function(){return J},tz:function(){return M},vh:function(){return _},vp:function(){return F}});var s,a,i,r,l,o,d,m,u,c,f,y,p,h,g,$,Z,S,P,b,q,x,C,j,v,D,I,E,N=t(30168),T=t(27570),A=(0,T.Ps)(s||(s=(0,N.Z)(["\n    query allSubjects ($offset: Int!, $limit: Int!, $filter: String) {\n        allSubjects (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            school {\n                id\n                name\n            }\n            subSchool {\n                id\n                name\n            }\n            subject \n            credit\n            content\n            createUserid{\n                teacher{\n                    familyName\n                    name\n                }\n            }\n        }\n    }\n"]))),B=((0,T.Ps)(a||(a=(0,N.Z)(["\n    query allTeacherStatuss {\n        allTeacherStatuss {\n            id\n            name\n        }\n    }\n"]))),(0,T.Ps)(i||(i=(0,N.Z)(["\n    query allStudentStatuss {\n        allStudentStatuss {\n            id\n            name\n        }\n    }\n"]))),(0,T.Ps)(r||(r=(0,N.Z)(["\n    query allStudentStatusExtras {\n        allStudentStatusExtras {\n            id\n            name\n        }\n    }\n"]))),(0,T.Ps)(l||(l=(0,N.Z)(["\n    query allUsers {\n        allUsers {\n            id\n            username\n            email\n        }\n    }\n"])))),F=((0,T.Ps)(o||(o=(0,N.Z)(["\n    query userByUsername($username: String!) {\n        userByUsername(username: $username) {\n            id\n            username\n        }\n    }\n"]))),(0,T.Ps)(d||(d=(0,N.Z)(["\n    query employeesAttandanceByRange ($startDate: DateTime!, $endDate: DateTime!) {\n        employeesAttandanceByRange (startDate: $startDate, endDate: $endDate) {\n            id\n            isIn\n            isOut\n            timeIn\n            timeOut\n            user {\n                id\n                isTeacher\n                isEmployee\n                teacher {\n                    familyName\n                    name\n                    teacherCode\n                }\n                employee {\n                    familyName\n                    name\n                    employeeCode\n                }\n                groups {\n                    name\n                }\n            }\n        }\n    }\n"])))),O=((0,T.Ps)(m||(m=(0,N.Z)(["\n    query allAttendaceEmployees {\n        allAttendaceEmployees {\n            username\n            email\n            isTeacher\n            isEmployee\n            teacher {\n                teacherCode\n                familyName\n                name\n            }\n            employee {\n                employeeCode\n                familyName\n                name\n            }\n        }\n    }\n"]))),(0,T.Ps)(u||(u=(0,N.Z)(["\n    query allEmployeesCompartment {\n        allEmployeesCompartment {\n            id\n            name\n        }\n    }\n"])))),U=(0,T.Ps)(c||(c=(0,N.Z)(["\n    query allEmployees ($filter: String) {\n        allEmployees (filter: $filter) {\n            id\n            user {\n                id\n                username\n                email\n                groups {\n                    name\n                }\n            }\n            compartment {\n                id\n                name\n            }\n            employeeCode\n            familyName\n            name\n            registerNo\n            photo\n            phone\n            phone2\n            address\n            sex\n            birthdate\n            birthCity {\n                id\n            }\n            birthDistrict {\n                id\n            }\n            status {\n                id\n            }\n        }\n    }\n"]))),k=(0,T.Ps)(f||(f=(0,N.Z)(["\n  \tquery allTeachers ($offset: Int!, $limit: Int!, $filter: String) {\n        allTeachers (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            user {\n                id\n                username\n                email\n            }\n            teacherCode\n            degree{\n                id\n            }\n            access\n            familyName\n            name\n            registerNo\n            photo\n            phone\n            phone2\n            address\n            joinDate\n            joinBefore\n            sex\n            birthdate\n            birthCity {\n                id\n                name\n            }\n            birthDistrict {\n                id\n                name\n            }\n            status {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n            subSchool {\n                id\n                name\n            }\n        }\n\t}\n"]))),M=(0,T.Ps)(y||(y=(0,N.Z)(["\n  \tquery allStudents ($filter: String, $program: Int, $classes: Int, $section: Int) {\n        allStudents (filter: $filter, program: $program, classes: $classes, section: $section) {\n            id\n            user {\n                id\n                username\n                email\n            }\n            studentCode\n            surname\n            familyName\n            name\n            religion\n            registerNo\n            nationality\n            state\n            photo\n            phone\n            address\n            bodyIndex\n            vaccine\n            drug\n            allergies\n            underlyingDisease\n            bloodType\n            etc\n            activity {\n                id\n                name\n            }\n            joinDate\n            sex\n            birthdate\n            classtime {\n                id\n                name\n            }\n            birthCity {\n                id\n                name\n            }\n            birthDistrict {\n                id\n                name\n            }\n            status {\n                id\n                name\n            }\n            statusExtra {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n            classes {\n                id\n                classes\n            }\n            section {\n                id\n                section\n            }\n            program {\n                id\n                program\n            }\n            joinSchoolyear {\n                id\n                schoolyear\n            }\n        }\n    }\n"]))),w=(0,T.Ps)(p||(p=(0,N.Z)(["\n  \tquery allCitys{\n        allCitys {\n            id\n            name\n            code\n        }\n\t}\n"]))),V=(0,T.Ps)(h||(h=(0,N.Z)(["\n    query allDistricts {\n        allDistricts {\n            id\n            code\n            name\n            cityID {\n                id\n                name\n            }\n        }\n    }\n"]))),L=(0,T.Ps)(g||(g=(0,N.Z)(["\n  \tquery allPrograms{\n        allPrograms {\n            id\n            program\n            programMgl\n            maxStudentNum\n            school {\n                id\n                name\n            }\n            subSchool {\n                id\n                name\n            }\n            status\n            createdAt\n            updatedAt\n        }\n\t  }\n"]))),R=(0,T.Ps)($||($=(0,N.Z)(["\n  \tquery allSchools {\n        allSchools {\n            id\n            name\n            nameMgl\n        }\n\t}\n"]))),Y=(0,T.Ps)(Z||(Z=(0,N.Z)(["\n  \tquery allSubSchools{\n        allSubSchools {\n            id\n            name\n            nameMgl\n            school {\n                id\n                name\n            }\n\t\t}\n\t}\n"]))),z=(0,T.Ps)(S||(S=(0,N.Z)(["\n    query allSections {\n        allSections {\n            id\n            section\n            classes {\n                id\n                classes\n            }\n            program {\n                id\n                program\n            }\n            teacher{\n                id\n            }\n            program {\n                id\n                program\n            }\n            subSchool {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n            createdAt\n            updatedAt\n        }\n    }\n"]))),J=(0,T.Ps)(P||(P=(0,N.Z)(["\n    query allClassess ($program: Int!, $offset: Int!, $limit: Int!, $filter: String) {\n        allClassess (program: $program, offset: $offset, limit: $limit, filter: $filter) {\n            id\n            classes\n            # classesNumeric\n            activity {\n                id\n                name\n            }\n            program {\n                id\n                program\n            }\n            subSchool {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n            status\n            sectionSet {\n                id\n                section\n                classes {\n                    id\n                    classes\n                }\n                program {\n                    id\n                    program\n                }\n                subSchool {\n                    id\n                    name\n                }\n                school {\n                    id\n                    name\n                }\n            }\n        }\n    }\n"]))),K=(0,T.Ps)(b||(b=(0,N.Z)(["\n    query allClasstimes {\n        allClasstimes {\n            id\n            name\n        }\n    }\n"]))),Q=(0,T.Ps)(q||(q=(0,N.Z)(["\n    query allSchoolyears {\n        allSchoolyears {\n            id\n            schoolyear\n        }\n    }\n"]))),W=(0,T.Ps)(x||(x=(0,N.Z)(["\n    query allParents ($offset: Int!, $limit: Int!, $filter: String) {\n        allParents (offset: $offset, limit: $limit, filter: $filter) {\n            id\n            familyName\n            name\n            profession\n            phone\n            address\n            student {\n                id\n                studentCode\n                familyName\n                name\n            }\n        }\n    }\n"]))),_=(0,T.Ps)(C||(C=(0,N.Z)(["\n    query sectionsByClasses ($classes: Int!) {\n        sectionsByClasses (classes: $classes) {\n            id\n            section\n            maxStudentNum\n            teacher{\n                name\n                id\n            }\n            classes {\n                id\n                classes\n            }\n            program {\n                id\n                program\n            }\n            subSchool {\n                id\n                name\n            }\n            school {\n                id\n                name\n            }\n        }\n    }\n"]))),G=(0,T.Ps)(j||(j=(0,N.Z)(["\n    query transfersByStudent ($student: Int!) {\n        transfersByStudent (student: $student) {\n            id\n            student {\n                familyName\n                name\n                photo\n                studentCode\n            }\n            school {\n                id\n                name\n            }\n            program {\n                id\n                program\n            }\n            classes {\n                id\n                classes\n            }\n            section {\n                id\n                section\n            }\n            status {\n                id\n                name\n            }\n            statusExtra {\n                id\n                name\n            }\n            classtime {\n                id\n                name\n            }\n            activity {\n                id\n                name\n            }\n            docDate\n            docNum\n            description\n            oldData\n        }\n    }\n"]))),H=(0,T.Ps)(v||(v=(0,N.Z)(["\n    query allEventTypes {\n        allEventTypes {\n            id\n            name\n            color\n        }\n    }\n"]))),X=(0,T.Ps)(D||(D=(0,N.Z)(["\n    query allEvents {\n        allEvents {\n            id\n            title\n            description\n            content\n            startAt\n            endAt\n            eventType {\n                id\n                name\n                color\n            }\n        }\n    } \n"]))),nn=((0,T.Ps)(I||(I=(0,N.Z)(["\n    query allEventsByType ($id: Int!) {\n        allEventsByType (id: $id) {\n            id\n            title\n            description\n            content\n            startAt\n            endAt\n            eventType\n        }\n    }\n"]))),(0,T.Ps)(E||(E=(0,N.Z)(['\n    query allStudentsPagination ($page: Int, $perPage: Int, $filter: String = "") {\n        allStudentsPagination (page: $page, perPage: $perPage, filter: $filter) {\n            page\n            perPage\n            pageCount\n            totalCount\n            records {\n                id\n                user {\n                    id\n                    username\n                    email\n                }\n                studentCode\n                surname\n                familyName\n                name\n                religion\n                registerNo\n                nationality\n                state\n                photo\n                phone\n                address\n                activity {\n                    id\n                    name\n                }\n                joinDate\n                sex\n                birthdate\n                classtime {\n                    id\n                    name\n                }\n                birthCity {\n                    id\n                    name\n                }\n                birthDistrict {\n                    id\n                    name\n                }\n                status {\n                    id\n                    name\n                }\n                statusExtra {\n                    id\n                    name\n                }\n                school {\n                    id\n                    name\n                }\n                classes {\n                    id\n                    classes\n                }\n                section {\n                    id\n                    section\n                }\n                program {\n                    id\n                    program\n                }\n                joinSchoolyear {\n                    id\n                    schoolyear\n                }\n            }\n        }\n    }\n']))))},99199:function(n,e,t){t.r(e);var s=t(29439),a=t(72791),i=t(73332),r=t(22949),l=t(49389),o=t(50419),d=t(37083),m=t(96578),u=t(84376),c=t(41920),f=t(25566),y=(t(20886),t(82630)),p=t(80184);e.default=function(n){var e=n.formType,t=n.editData,h=n.setIsModalVisible,g=n.refetch,$=i.Z.useForm(),Z=(0,s.Z)($,1)[0],S=r.Z.Option,P=l.Z.TextArea,b=(0,m.a)(c.nh).data,q=(0,u.D)(f.U7,{onCompleted:function(n){o.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),Z.resetFields(),g(),h(!1)}}),x=(0,s.Z)(q,2),C=x[0],j=x[1].loading,v=(0,u.D)(f.kZ,{onCompleted:function(n){o.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),Z.resetFields(),g(),h(!1)}}),D=(0,s.Z)(v,2),I=D[0],E=D[1].loading;return(0,a.useEffect)((function(){if("edit"===e){var n={description:t.description,schoolyear:t.schoolyear.id,status:t.status};Z.setFieldsValue(n)}else"create"===e&&Z.resetFields()}),[Z,e,t]),(0,p.jsx)(d.Z,{spinning:j||E,tip:"\u0410\u0447\u0430\u0430\u043b\u043b\u0430\u0436 \u0431\u0430\u0439\u043d\u0430...",children:(0,p.jsxs)(i.Z,{id:"LessonForm",layout:"vertical",form:Z,name:"lesson",onFinish:function(n){"edit"===e?(n.id=t.id,I({variables:n})):C({variables:n})},children:[(0,p.jsx)(i.Z.Item,{name:"schoolyear",label:(0,p.jsx)(y.Z,{id:"schoolyear"}),rules:[{required:!0,message:(0,p.jsx)(y.Z,{id:"form.required"})}],children:(0,p.jsx)(r.Z,{children:null===b||void 0===b?void 0:b.allSchoolyears.map((function(n,e){return(0,p.jsxs)(S,{value:n.id,children:[n.schoolyear," ",n.season]},e)}))})}),(0,p.jsx)(i.Z.Item,{name:"description",label:(0,p.jsx)(y.Z,{id:"description"}),rules:[{required:!0,message:(0,p.jsx)(y.Z,{id:"form.required"})}],children:(0,p.jsx)(P,{rows:4})}),(0,p.jsx)(i.Z.Item,{name:"status",label:(0,p.jsx)(y.Z,{id:"status"}),rules:[{required:!0,message:(0,p.jsx)(y.Z,{id:"form.required"})}],children:(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(S,{value:"OPEN",children:(0,p.jsx)(y.Z,{id:"status.open"})},0),(0,p.jsx)(S,{value:"CLOSED",children:(0,p.jsx)(y.Z,{id:"status.closed"})},1)]})})]})})}}}]);
//# sourceMappingURL=9199.b28feca7.chunk.js.map