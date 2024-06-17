'use client'
import React, { useState } from 'react'
import SettingProfile from '../../components/settingProfile';
import Documents from '@/components/Documents';
import BankAccount from '@/components/BankAccount';
import Nominiees from '@/components/Nominees';
import { CgProfile } from 'react-icons/cg';
import { BsBank } from 'react-icons/bs';
import { IoDocumentTextOutline, IoPeopleCircleOutline } from 'react-icons/io5';
type Tab = 'profile' | 'documents' | 'bankAccounts' | 'nominees';

const Settings = () => {
    const [activeTab, setActiveTab] = useState<Tab>('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <SettingProfile />;
            case 'documents':
                return <Documents />;
            case 'bankAccounts':
                return <BankAccount />;
            case 'nominees':
                return <Nominiees />;
            default:
                return <SettingProfile />;
        }
    };
    return (

        <div className='bg-gray-100 py-10'>
            <div className="flex justify-center  shadow-lg mx-56  rounded-xl">
                <section className="flex justify-start flex-col  border-r border-gray-400  bg-white w-1/4 py-8  rounded-l-xl">
                    <button
                        className={`flex items-center gap-4 justify-start mb-2  px-6 py-2  ${activeTab === 'profile' ? ' text-primary bg-green-50 border-l-4 border-green-700' : 'text-[#666666]'}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <CgProfile />
                        Profile
                    </button>
                    <button
                        className={`flex  items-center gap-4 justify-start mb-2  px-6 py-2  ${activeTab === 'documents' ? ' text-primary bg-green-50 border-l-4 border-green-700' : 'text-[#666666]'}`}
                        onClick={() => setActiveTab('documents')}
                    >
                        <IoDocumentTextOutline />

                        Documents
                    </button>
                    <button
                        className={`flex  items-center gap-4 justify-start mb-2  px-6 py-2  ${activeTab === 'bankAccounts' ? ' text-primary bg-green-50 border-l-4 border-green-700' : 'text-[#666666]'}`}
                        onClick={() => setActiveTab('bankAccounts')}
                    >
                        <BsBank />

                        Bank Account
                    </button>
                    <button
                        className={`flex  items-center gap-4 justify-start mb-2  px-6 py-2  ${activeTab === 'nominees' ? ' text-primary bg-green-50 border-l-4 border-green-700' : 'text-[#666666]'}`}
                        onClick={() => setActiveTab('nominees')}
                    >
                        <IoPeopleCircleOutline />
                        Nominees
                    </button>

                </section>
                <section className="content p-4  bg-white rounded w-3/4 rounded-r-xl">
                    {renderContent()}
                </section>
            </div>
        </div>
    )
}

export default Settings